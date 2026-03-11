/**
 * FEA Viewer — WebSocket Progress Listener
 * ==========================================
 *
 * Subscribes to model parse progress updates via WebSocket (02a §3.2).
 */

export interface ProgressMessage {
    model_id: string;
    status: string;
    progress: number;          // 0.0–1.0
    message?: string;
    warnings_count?: number;
}

type ProgressCallback = (msg: ProgressMessage) => void;

/**
 * Subscribe to parse progress for a specific model.
 * Returns an unsubscribe function.
 */
export function subscribeProgress(
    modelId: string,
    onMessage: ProgressCallback,
): () => void {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const url = `${protocol}//${window.location.host}/ws/progress/${modelId}`;

    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data as string) as ProgressMessage;
            onMessage(data);
        } catch {
            console.warn('[WS] Failed to parse progress message:', event.data);
        }
    };

    ws.onerror = (event) => {
        console.error('[WS] WebSocket error:', event);
    };

    ws.onclose = () => {
        console.info(`[WS] Connection closed for model ${modelId}`);
    };

    return () => {
        if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
            ws.close();
        }
    };
}
