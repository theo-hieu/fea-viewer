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
    };
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
            console.info(`[ModelBootstrap] Polling stop for ${modelId}`);
            wsUnsubscribe();
            wsUnsubscribe = null;
        }
    };

    const scheduleNextPoll = () => {
        timeoutId = window.setTimeout(() => {
            void poll();
        }, POLL_INTERVAL_MS);
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
            handlers.onStatus(status);

            if (status.status === 'parsing') {
                ensureProgressSubscription();

                if (Date.now() - startedAt >= PARSING_TIMEOUT_MS) {
                    cleanup();
                    handlers.onTimeout();
                    return;
                }

                scheduleNextPoll();
                return;
            }

            cleanup();
        } catch (error) {
            cleanup();
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
    console.info('[Viewport] Tree fetch result', { modelId, root: tree.name });
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
    return {
        id: assembly.id ?? 'assembly-root',
        name: assembly.name ?? 'Assembly',
        type: 'assembly',
        children: assembly.children?.map(normalizeTree) ?? [],
    };
}
