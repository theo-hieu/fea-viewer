import { fetchJSON } from '@/api/client';
import { subscribeProgress, type ProgressMessage } from '@/api/ws';
import type {
    ImportWarning,
    ModelMetadata,
    NamedSetDescriptor,
    ResultFieldDescriptor,
    StatusResponse,
    TreeNode,
    UnitSystem,
} from '@/utils/feaTypes';

const POLL_INTERVAL_MS = 1000;
const PARSING_TIMEOUT_MS = 60000;

type BackendMetadataResponse = {
    metadata?: Partial<ModelMetadata>;
    unit_system?: Partial<UnitSystem>;
    warnings?: string[] | ImportWarning[];
};

type BackendFieldResponse = {
    id: string;
    name: string;
    location: ResultFieldDescriptor['location'];
    components?: number;
    timestep_count?: number;
    n_components?: number;
    n_timesteps?: number;
};

type BackendTreeResponse = TreeNode | {
    assembly?: {
        id?: string;
        name?: string;
        children?: BackendTreeResponse[];
        instances?: Array<{
            id?: string;
            name?: string;
            children?: BackendTreeResponse[];
            parts?: Array<{
                id?: string;
                name?: string;
                children?: BackendTreeResponse[];
                sets?: Array<{
                    id?: string;
                    name?: string;
                    set_type?: 'node' | 'element';
                }>;
            }>;
            sets?: Array<{
                id?: string;
                name?: string;
                set_type?: 'node' | 'element';
            }>;
        }>;
        parts?: Array<{
            id?: string;
            name?: string;
            children?: BackendTreeResponse[];
            sets?: Array<{
                id?: string;
                name?: string;
                set_type?: 'node' | 'element';
            }>;
        }>;
        sets?: Array<{
            id?: string;
            name?: string;
            set_type?: 'node' | 'element';
        }>;
    };
};

type BackendSetNode = {
    id?: string;
    name?: string;
    set_type?: 'node' | 'element';
};

type BackendPartNode = {
    id?: string;
    name?: string;
    children?: BackendTreeResponse[];
    sets?: BackendSetNode[];
};

type BackendInstanceNode = {
    id?: string;
    name?: string;
    children?: BackendTreeResponse[];
    parts?: BackendPartNode[];
    sets?: BackendSetNode[];
};

interface MonitorHandlers {
    onStatus: (status: StatusResponse) => void;
    onProgress?: (message: ProgressMessage) => void;
    onError: (error: Error) => void;
    onTimeout: () => void;
}

const DEFAULT_UNIT_SYSTEM: UnitSystem = {
    length: 'unspecified',
    force: 'unspecified',
    time: 'unspecified',
    temperature: 'unspecified',
    declared_system: 'unspecified',
};

const DEFAULT_METADATA: ModelMetadata = {
    source_filename: 'Unknown',
    file_format: 'unknown',
    format_version: 'unknown',
    solver_name: 'unknown',
    solver_version: 'unknown',
    title: 'Untitled model',
    unit_system: DEFAULT_UNIT_SYSTEM,
    coordinate_system: 'unspecified',
};

export async function fetchModelStatus(modelId: string): Promise<StatusResponse> {
    console.info(`[ModelBootstrap] Status fetch start for ${modelId}`);
    const response = await fetchJSON<StatusResponse>(`/models/${modelId}/status`);
    console.info('[ModelBootstrap] Status fetch result', { modelId, response });
    return response;
}

export function monitorModelStatus(modelId: string, handlers: MonitorHandlers): () => void {
    let disposed = false;
    let timeoutId: number | undefined;
    let wsUnsubscribe: (() => void) | null = null;
    const startedAt = Date.now();

    const cleanup = () => {
        disposed = true;
        if (timeoutId !== undefined) {
            window.clearTimeout(timeoutId);
        }
        if (wsUnsubscribe) {
            wsUnsubscribe();
            wsUnsubscribe = null;
        }
    };

    const stopPolling = (reason: string) => {
        console.info('[ModelBootstrap] Polling stopped', { modelId, reason });
        cleanup();
    };

    const scheduleNextPoll = (status: string) => {
        timeoutId = window.setTimeout(() => {
            void poll();
        }, POLL_INTERVAL_MS);
        console.info('[ModelBootstrap] Polling scheduled', { modelId, status, delayMs: POLL_INTERVAL_MS });
    };

    const ensureProgressSubscription = () => {
        if (wsUnsubscribe) return;
        console.info(`[ModelBootstrap] Polling start for ${modelId}`);
        wsUnsubscribe = subscribeProgress(modelId, (message) => {
            if (disposed) return;
            console.info('[ModelBootstrap] Progress message', { modelId, message });
            handlers.onProgress?.(message);

            if (message.status === 'ready' || message.status === 'error') {
                void poll();
            }
        });
    };

    const poll = async () => {
        if (disposed) return;

        try {
            const status = await fetchModelStatus(modelId);
            console.info('[ModelBootstrap] Status response', { modelId, status: status.status, response: status });
            handlers.onStatus(status);

            if (status.status === 'uploading' || status.status === 'parsing') {
                ensureProgressSubscription();

                if (Date.now() - startedAt >= PARSING_TIMEOUT_MS) {
                    stopPolling('timeout');
                    handlers.onTimeout();
                    return;
                }

                scheduleNextPoll(status.status);
                return;
            }

            stopPolling(`terminal:${status.status}`);
        } catch (error) {
            stopPolling('request-error');
            handlers.onError(error instanceof Error ? error : new Error('Unknown bootstrap error'));
        }
    };

    void poll();

    return cleanup;
}

export async function fetchModelMetadata(modelId: string): Promise<{
    metadata: ModelMetadata;
    warnings: ImportWarning[];
}> {
    console.info(`[Viewport] Metadata fetch start for ${modelId}`);
    const response = await fetchJSON<BackendMetadataResponse>(`/models/${modelId}/metadata`);
    const metadata = normalizeMetadata(response);
    const warnings = normalizeWarnings(response.warnings);
    console.info('[Viewport] Metadata fetch result', { modelId, warnings: warnings.length });
    return { metadata, warnings };
}

export async function fetchModelTree(modelId: string): Promise<TreeNode> {
    console.info(`[Viewport] Tree fetch start for ${modelId}`);
    const response = await fetchJSON<BackendTreeResponse>(`/models/${modelId}/tree`);
    const tree = normalizeTree(response);
    console.info('[Viewport] Tree parse result', {
        modelId,
        root: tree.name,
        childCount: tree.children?.length ?? 0,
    });
    return tree;
}

export async function fetchModelFields(modelId: string): Promise<ResultFieldDescriptor[]> {
    console.info(`[Viewport] Fields fetch start for ${modelId}`);
    const response = await fetchJSON<BackendFieldResponse[]>(`/models/${modelId}/fields`);
    const fields = response.map(normalizeField);
    console.info('[Viewport] Fields fetch result', { modelId, count: fields.length });
    return fields;
}

export async function fetchModelSets(modelId: string): Promise<NamedSetDescriptor[]> {
    console.info(`[Viewport] Sets fetch start for ${modelId}`);
    const response = await fetchJSON<NamedSetDescriptor[]>(`/models/${modelId}/sets`);
    console.info('[Viewport] Sets fetch result', { modelId, count: response.length });
    return response;
}

function normalizeWarnings(warnings: BackendMetadataResponse['warnings']): ImportWarning[] {
    if (!warnings) return [];

    return warnings.map((warning) => {
        if (typeof warning === 'string') {
            return {
                category: 'Import Warning',
                message: warning,
                severity: 'warning',
                dismissible: false,
            };
        }

        return warning;
    });
}

function normalizeMetadata(response: BackendMetadataResponse): ModelMetadata {
    const mergedUnitSystem: UnitSystem = {
        ...DEFAULT_UNIT_SYSTEM,
        ...(response.metadata?.unit_system ?? {}),
        ...(response.unit_system ?? {}),
    };

    return {
        ...DEFAULT_METADATA,
        ...response.metadata,
        unit_system: mergedUnitSystem,
    };
}

function normalizeField(field: BackendFieldResponse): ResultFieldDescriptor {
    const nComponents = field.n_components ?? field.components ?? 1;
    const nTimesteps = field.n_timesteps ?? field.timestep_count ?? 1;

    return {
        id: field.id,
        name: field.name,
        location: field.location,
        n_components: nComponents,
        n_timesteps: nTimesteps,
        timesteps: Array.from({ length: nTimesteps }, (_, stepIndex) => ({
            step_index: stepIndex,
            time_value: null,
        })),
        provenance: {
            source_field_name: field.name,
            source_location: field.location,
            extrapolation_applied: false,
            averaging_applied: false,
            averaging_method: null,
            coordinate_system: 'unspecified',
            warnings: [],
        },
    };
}

function normalizeTree(response: BackendTreeResponse): TreeNode {
    if ('type' in response) {
        return response;
    }

    const assembly = response.assembly ?? {};
    const assemblyChildren = [
        ...(assembly.children?.map(normalizeTree) ?? []),
        ...(assembly.instances?.map((instance, index) => normalizeInstance(instance, index)) ?? []),
        ...(assembly.parts?.map((part, index) => normalizePart(part, index)) ?? []),
        ...(assembly.sets?.map((setNode, index) => normalizeSet(setNode, index)) ?? []),
    ];

    return {
        id: assembly.id ?? 'assembly-root',
        name: assembly.name ?? 'Assembly',
        type: 'assembly',
        children: assemblyChildren,
    };
}

function normalizeInstance(
    instance: BackendInstanceNode,
    index: number,
): TreeNode {
    return {
        id: instance.id ?? `instance-${index}`,
        name: instance.name ?? `Instance ${index + 1}`,
        type: 'instance',
        children: [
            ...(instance.children?.map(normalizeTree) ?? []),
            ...(instance.parts?.map((part: BackendPartNode, partIndex: number) => normalizePart(part, partIndex)) ?? []),
            ...(instance.sets?.map((setNode: BackendSetNode, setIndex: number) => normalizeSet(setNode, setIndex)) ?? []),
        ],
    };
}

function normalizePart(
    part: BackendPartNode,
    index: number,
): TreeNode {
    return {
        id: part.id ?? `part-${index}`,
        name: part.name ?? `Part ${index + 1}`,
        type: 'part',
        children: [
            ...(part.children?.map(normalizeTree) ?? []),
            ...(part.sets?.map((setNode: BackendSetNode, setIndex: number) => normalizeSet(setNode, setIndex)) ?? []),
        ],
    };
}

function normalizeSet(
    setNode: BackendSetNode,
    index: number,
): TreeNode {
    return {
        id: setNode.id ?? `set-${index}`,
        name: setNode.name ?? `Set ${index + 1}`,
        type: setNode.set_type === 'element' ? 'element_set' : 'node_set',
        children: [],
    };
}
