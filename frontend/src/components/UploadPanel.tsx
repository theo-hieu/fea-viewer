/**
 * FEA Viewer - UploadPanel Component
 * =====================================
 *
 * Drag-drop or file picker, progress bar via WebSocket and status polling.
 */

import React, { useCallback, useRef, useState } from 'react';
import { useModelStore } from '@/store/modelStore';
import { uploadFile } from '@/api/client';

export const UploadPanel: React.FC = () => {
    const status = useModelStore((s) => s.status);
    const modelId = useModelStore((s) => s.modelId);
    const uploadProgress = useModelStore((s) => s.uploadProgress);
    const parseProgress = useModelStore((s) => s.parseProgress);
    const errorMessage = useModelStore((s) => s.errorMessage);
    const setModelId = useModelStore((s) => s.setModelId);
    const setStatus = useModelStore((s) => s.setStatus);
    const setUploadProgress = useModelStore((s) => s.setUploadProgress);
    const setParseProgress = useModelStore((s) => s.setParseProgress);
    const setErrorMessage = useModelStore((s) => s.setErrorMessage);
    const resetModel = useModelStore((s) => s.resetModel);
    const setBootstrapIdle = useModelStore((s) => s.setBootstrapIdle);
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(async (file: File) => {
        resetModel();
        setStatus('uploading');
        setUploadProgress(0);
        setParseProgress(0);
        setErrorMessage(null);
        setBootstrapIdle();

        try {
            const { model_id } = await uploadFile(file);
            console.info('[UploadPanel] Upload returned modelId', { modelId: model_id, fileName: file.name });
            setModelId(model_id);
            window.history.replaceState({}, '', `/?modelId=${encodeURIComponent(model_id)}`);
            setStatus('parsing');
            setUploadProgress(100);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Upload failed');
        }
    }, [resetModel, setBootstrapIdle, setErrorMessage, setModelId, setParseProgress, setStatus, setUploadProgress]);

    const onDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) void handleFile(file);
    }, [handleFile]);

    const onDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    }, []);

    const onDragLeave = useCallback(() => setIsDragOver(false), []);

    const onFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) void handleFile(file);
    }, [handleFile]);

    return (
        <div style={{ width: '100%' }}>
            {status === 'idle' && (
                <>
                    <div
                        className={`upload-dropzone ${isDragOver ? 'upload-dropzone--active' : ''}`}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onClick={() => inputRef.current?.click()}
                    >
                        <div className="upload-dropzone__title">Drop VTK/VTU file here</div>
                        <div className="upload-dropzone__subtitle">or click to browse</div>
                    </div>
                    <input
                        ref={inputRef}
                        type="file"
                        accept=".vtk,.vtu,.vtp,.pvtu"
                        style={{ display: 'none' }}
                        onChange={onFileSelect}
                    />
                </>
            )}

            {status === 'uploading' && (
                <div>
                    <div style={{ marginBottom: 8, fontSize: 12 }}>Uploading...</div>
                    <div className="progress-bar">
                        <div className="progress-bar__fill" style={{ width: `${uploadProgress}%` }} />
                    </div>
                </div>
            )}

            {status === 'parsing' && (
                <div>
                    <div style={{ marginBottom: 8, fontSize: 12 }}>
                        {modelId ? `Parsing ${modelId}...` : 'Parsing...'}
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar__fill" style={{ width: `${parseProgress}%` }} />
                    </div>
                </div>
            )}

            {status === 'error' && (
                <div style={{ color: 'var(--accent-danger)', fontSize: 12 }}>
                    <div style={{ marginBottom: 8, fontWeight: 600 }}>Error</div>
                    <div>{errorMessage}</div>
                </div>
            )}
        </div>
    );
};
