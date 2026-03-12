import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import App from '@/App';
import { useModelStore } from '@/store/modelStore';

vi.mock('@/components/Viewport', () => ({
    Viewport: () => React.createElement('div', { 'data-testid': 'viewport-mock' }, 'Viewport Mock'),
}));

vi.mock('@/api/ws', () => ({
    subscribeProgress: vi.fn(() => vi.fn()),
}));

describe('URL Bootstrap Flow', () => {
    beforeEach(() => {
        window.history.replaceState({}, '', '/');
        useModelStore.getState().reset();
        vi.restoreAllMocks();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('shows upload screen when no modelId is present', () => {
        render(React.createElement(App, null));
        expect(screen.getByText('Upload a VTK/VTU file to begin')).toBeDefined();
    });

    it('bootstraps modelId from URL and handles ready state', async () => {
        window.history.replaceState({}, '', '/?modelId=test-ready-id');

        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ status: 'ready', warnings_count: 0, error_message: null }),
        });
        vi.stubGlobal('fetch', fetchMock);

        render(React.createElement(App, null));

        expect(screen.getByText('Checking model status...')).toBeDefined();
        expect(screen.queryByText('Upload a VTK/VTU file to begin')).toBeNull();

        await waitFor(() => {
            expect(screen.getByTestId('viewport-mock')).toBeDefined();
        });

        expect(screen.getByText('Model Tree')).toBeDefined();
        expect(screen.getByText('Metadata')).toBeDefined();
        expect(fetchMock).toHaveBeenCalledWith('/api/v1/models/test-ready-id/status', {
            headers: { Accept: 'application/json' },
        });
        expect(useModelStore.getState().status).toBe('ready');
        expect(useModelStore.getState().modelId).toBe('test-ready-id');
    });

    it('polls a parsing model until it becomes ready', async () => {
        vi.useFakeTimers();
        window.history.replaceState({}, '', '/?modelId=test-parsing-id');

        const fetchMock = vi.fn()
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'parsing', warnings_count: 0, error_message: null }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'ready', warnings_count: 0, error_message: null }),
            });
        vi.stubGlobal('fetch', fetchMock);

        render(React.createElement(App, null));

        expect(screen.getByText('Checking model status...')).toBeDefined();

        await act(async () => {
            await vi.advanceTimersByTimeAsync(1000);
        });

        expect(screen.getByTestId('viewport-mock')).toBeDefined();
        expect(fetchMock).toHaveBeenCalledTimes(2);
        expect(useModelStore.getState().status).toBe('ready');
    });

    it('uploads a file, keeps polling through uploading/parsing, and bootstraps automatically', async () => {
        vi.useFakeTimers();

        const fetchMock = vi.fn()
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ model_id: 'uploaded-model-id' }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'uploading', warnings_count: 0, error_message: null }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'parsing', warnings_count: 0, error_message: null }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ status: 'ready', warnings_count: 1, error_message: null }),
            });
        vi.stubGlobal('fetch', fetchMock);

        const { container } = render(React.createElement(App, null));
        const input = container.querySelector('input[type="file"]') as HTMLInputElement | null;
        expect(input).not.toBeNull();

        await act(async () => {
            const file = new File(['mesh'], 'sample.vtu', { type: 'application/octet-stream' });
            fireEvent.change(input!, { target: { files: [file] } });
            await Promise.resolve();
        });

        expect(useModelStore.getState().modelId).toBe('uploaded-model-id');
        await act(async () => {
            await vi.advanceTimersByTimeAsync(3000);
        });

        await act(async () => {
            await Promise.resolve();
        });

        expect(screen.getByTestId('viewport-mock')).toBeDefined();
        expect(fetchMock).toHaveBeenNthCalledWith(1, '/api/v1/models/upload', expect.objectContaining({
            method: 'POST',
            body: expect.any(FormData),
        }));
        expect(fetchMock).toHaveBeenCalledWith('/api/v1/models/upload', expect.anything());
        expect(fetchMock).toHaveBeenCalledWith('/api/v1/models/uploaded-model-id/status', {
            headers: { Accept: 'application/json' },
        });
        expect(fetchMock).toHaveBeenCalledTimes(4);
        expect(useModelStore.getState().status).toBe('ready');
    });

    it('shows error state when backend reports error', async () => {
        window.history.replaceState({}, '', '/?modelId=test-error-id');

        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ status: 'error', warnings_count: 0, error_message: 'File corrupted' }),
        });
        vi.stubGlobal('fetch', fetchMock);

        render(React.createElement(App, null));

        await waitFor(() => {
            expect(screen.getByText(/Error loading model/i)).toBeDefined();
        });

        expect(screen.queryByText('Upload a VTK/VTU file to begin')).toBeNull();
        expect(useModelStore.getState().status).toBe('error');
    });
});
