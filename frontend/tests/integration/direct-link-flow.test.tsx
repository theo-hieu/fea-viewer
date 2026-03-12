import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import App from '@/App';
import { useModelStore } from '@/store/modelStore';

vi.mock('@/components/Viewport', () => ({
    Viewport: () => React.createElement('div', { 'data-testid': 'viewport-mock' }, 'Viewport Mock'),
}));

vi.mock('@/api/ws', () => ({
    subscribeProgress: vi.fn(() => vi.fn()),
}));

describe('Direct link integration flow', () => {
    beforeEach(() => {
        window.history.replaceState({}, '', '/?modelId=integration-id');
        useModelStore.getState().reset();
        vi.restoreAllMocks();
    });

    it('loads from modelId without showing the manual upload empty state', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ status: 'ready', warnings_count: 1, error_message: null }),
        }));

        render(React.createElement(App, null));

        expect(screen.queryByText('Upload a VTK/VTU file to begin')).toBeNull();
        expect(screen.getByText('Checking model status...')).toBeDefined();

        await waitFor(() => {
            expect(screen.getByTestId('viewport-mock')).toBeDefined();
        });

        expect(screen.getByText('Model Tree')).toBeDefined();
        expect(screen.getByText('Metadata')).toBeDefined();
        expect(useModelStore.getState().modelId).toBe('integration-id');
        expect(useModelStore.getState().status).toBe('ready');
    });
});
