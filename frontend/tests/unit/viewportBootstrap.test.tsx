import React from 'react';
import { beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { Viewport } from '@/components/Viewport';
import { useModelStore } from '@/store/modelStore';

const spies = vi.hoisted(() => ({
    buildMesh: vi.fn(),
    createWireframe: vi.fn(),
    zoomToFit: vi.fn(),
    fetchBinary: vi.fn(),
    fetchSurfacesBinary: vi.fn(),
    fetchModelMetadata: vi.fn(),
    fetchModelTree: vi.fn(),
    fetchModelFields: vi.fn(),
    fetchModelSets: vi.fn(),
}));

vi.mock('@/hooks/useContourEffect', () => ({ useContourEffect: vi.fn() }));
vi.mock('@/hooks/useDeformEffect', () => ({ useDeformEffect: vi.fn() }));
vi.mock('@/components/InfoPanel', () => ({
    InfoPanel: () => React.createElement('div', { 'data-testid': 'info-panel' }),
}));

vi.mock('@/api/client', () => ({
    fetchBinary: spies.fetchBinary,
    fetchSurfacesBinary: spies.fetchSurfacesBinary,
}));

vi.mock('@/api/models', () => ({
    fetchModelMetadata: spies.fetchModelMetadata,
    fetchModelTree: spies.fetchModelTree,
    fetchModelFields: spies.fetchModelFields,
    fetchModelSets: spies.fetchModelSets,
}));

vi.mock('@/three/SceneManager', () => ({
    SceneManager: class SceneManager {
        static isWebGL2Available() {
            return true;
        }

        scene = {} as any;
        camera = {} as any;
        renderer = {
            domElement: document.createElement('canvas'),
            getPixelRatio: () => 1,
        } as any;

        constructor(_container: HTMLDivElement) {}
        start() {}
        dispose() {}
        zoomToFit() {
            spies.zoomToFit();
        }
    },
}));

vi.mock('@/three/MeshManager', () => ({
    MeshManager: class MeshManager {
        buildMesh(...args: unknown[]) {
            spies.buildMesh(...args);
        }
        getBaseGeometry() {
            return {};
        }
        getMeshGroups() {
            return [];
        }
    },
}));

vi.mock('@/three/WireframeManager', () => ({
    WireframeManager: class WireframeManager {
        createWireframe(...args: unknown[]) {
            spies.createWireframe(...args);
        }
        setVisible() {}
        clearOverlay() {}
    },
}));

vi.mock('@/three/ContourManager', () => ({
    ContourManager: class ContourManager {
        getMaterial() {
            return null;
        }
    },
}));

vi.mock('@/three/DeformationManager', () => ({
    DeformationManager: class DeformationManager {},
}));

vi.mock('@/three/PickingManager', () => ({
    PickingManager: class PickingManager {
        constructor(_w: number, _h: number) {}
        resize() {}
        dispose() {}
        setDeformScale() {}
        buildPickingScene() {}
        pick() {
            return null;
        }
    },
}));

describe('Viewport bootstrap with surfaces payload', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        useModelStore.getState().reset();

        const nodeCoords = new Float64Array([0, 0, 0, 1, 0, 0, 0, 1, 0]);
        (spies.fetchBinary as Mock).mockResolvedValue({
            buffer: nodeCoords.buffer,
            meta: { dtype: 'float64', shape: [3, 3], byteOrder: 'little' },
        });
        (spies.fetchModelMetadata as Mock).mockResolvedValue({
            metadata: {
                source_filename: 'a.vtu',
                file_format: 'vtu',
                format_version: '1.0',
                solver_name: 'x',
                solver_version: '1',
                title: 'demo',
                unit_system: {
                    length: 'unspecified',
                    force: 'unspecified',
                    time: 'unspecified',
                    temperature: 'unspecified',
                    declared_system: 'unspecified',
                },
                coordinate_system: 'global',
            },
            warnings: [],
        });
        (spies.fetchModelTree as Mock).mockResolvedValue({
            id: 'assembly-root',
            name: 'Assembly',
            type: 'assembly',
            children: [],
        });
        (spies.fetchModelFields as Mock).mockResolvedValue([]);
        (spies.fetchModelSets as Mock).mockResolvedValue([]);

        useModelStore.getState().setModelId('m1');
        useModelStore.getState().setStatus('ready');
    });

    it('builds mesh when surfaces parse succeeds', async () => {
        (spies.fetchSurfacesBinary as Mock).mockResolvedValue({
            surfaceIndices: new Int32Array([0, 1, 2]),
            surfaceNormals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]),
            surfaceElementMap: new Int32Array([0]),
            headers: {
                dtype: 'mixed',
                shape: { indices: [3], normals: [9], map: [1] },
                byteOrder: 'little',
                offsets: { indices: [0, 12], normals: [12, 48], map: [48, 52] },
            },
        });

        render(React.createElement(Viewport));

        await waitFor(() => {
            expect(spies.buildMesh).toHaveBeenCalled();
            expect(spies.createWireframe).toHaveBeenCalled();
        });

        expect(useModelStore.getState().status).toBe('ready');
        expect(useModelStore.getState().bootstrapStatus).toBe('loaded');
    });

    it('sets explicit error state when surfaces parsing fails', async () => {
        (spies.fetchSurfacesBinary as Mock).mockRejectedValue(new Error('bad surfaces header'));

        render(React.createElement(Viewport));

        await waitFor(() => {
            expect(useModelStore.getState().status).toBe('error');
        });

        expect(useModelStore.getState().errorMessage).toContain('Bootstrap failed during fetching geometry: bad surfaces header');
    });

    it('does not hang in loading state when geometry validation fails', async () => {
        (spies.fetchSurfacesBinary as Mock).mockResolvedValue({
            surfaceIndices: new Int32Array([0, 1, 9]),
            surfaceNormals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]),
            surfaceElementMap: new Int32Array([0]),
            headers: {
                dtype: 'mixed',
                shape: { indices: [3], normals: [9], map: [1] },
                byteOrder: 'little',
                offsets: { indices: [0, 12], normals: [12, 48], map: [48, 52] },
            },
        });
        (spies.buildMesh as Mock).mockImplementationOnce(() => {
            throw new Error('Surface indices exceed vertex count (max=9, vertexCount=3)');
        });

        render(React.createElement(Viewport));

        await waitFor(() => {
            expect(useModelStore.getState().bootstrapStatus).toBe('error');
        });

        expect(useModelStore.getState().status).toBe('error');
        expect(useModelStore.getState().errorMessage).toContain('Surface indices exceed vertex count');
    });

    it('does not let sparse tree/panel failures block mesh rendering', async () => {
        (spies.fetchSurfacesBinary as Mock).mockResolvedValue({
            surfaceIndices: new Int32Array([0, 1, 2]),
            surfaceNormals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]),
            surfaceElementMap: new Int32Array([0]),
            headers: {
                dtype: 'mixed',
                shape: { indices: [3], normals: [9], map: [1] },
                byteOrder: 'little',
                offsets: { indices: [0, 12], normals: [12, 48], map: [48, 52] },
            },
        });
        (spies.fetchModelTree as Mock).mockRejectedValue(new Error('tree exploded'));

        render(React.createElement(Viewport));

        await waitFor(() => {
            expect(spies.buildMesh).toHaveBeenCalled();
        });

        expect(useModelStore.getState().status).toBe('ready');
        expect(useModelStore.getState().bootstrapStatus).toBe('loaded');
        expect(useModelStore.getState().tree).toEqual({
            id: 'assembly-root',
            name: 'Assembly',
            type: 'assembly',
            children: [],
        });
    });
});
