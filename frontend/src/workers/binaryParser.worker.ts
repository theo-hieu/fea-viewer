/**
 * FEA Viewer — Binary Parser Web Worker
 * =======================================
 *
 * Parses and reshapes large binary ArrayBuffers off the main thread.
 * Receives ArrayBuffer + metadata, returns typed arrays via Transferable.
 *
 * Per 02b §6.5: Web Workers for parsing keep the main thread responsive.
 */

export interface WorkerRequest {
    id: number;
    type: 'decode';
    buffer: ArrayBuffer;
    dtype: string;
    shape: number[];
}

export interface WorkerResponse {
    id: number;
    type: 'decoded';
    buffer: ArrayBuffer;
    dtype: string;
    length: number;
}

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
    const { id, type, buffer, dtype } = event.data;

    if (type === 'decode') {
        // The buffer is already in the correct format from the server.
        // We just validate and send it back as a transferable.
        const response: WorkerResponse = {
            id,
            type: 'decoded',
            buffer,
            dtype,
            length: getTypedLength(buffer, dtype),
        };
        (self as unknown as Worker).postMessage(response, [buffer]);
    }
};

function getTypedLength(buffer: ArrayBuffer, dtype: string): number {
    switch (dtype) {
        case 'float64': return buffer.byteLength / 8;
        case 'float32': return buffer.byteLength / 4;
        case 'int32': return buffer.byteLength / 4;
        case 'uint8': return buffer.byteLength;
        default: return buffer.byteLength;
    }
}
