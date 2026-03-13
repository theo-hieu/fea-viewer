import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchModelMetadata } from '@/api/models';

function mockJsonResponse(payload: unknown) {
    return {
        ok: true,
        json: async () => payload,
        text: async () => 'error-body',
    } as unknown as Response;
}

describe('model metadata API normalization', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('preserves real backend metadata so the UI does not fall back to Unknown/unknown', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockJsonResponse({
                metadata: {
                    source_filename: 'rear_bracket_ready.vtu',
                    file_format: 'vtu',
                    format_version: '2.2',
                    solver_name: 'Abaqus',
                    solver_version: '2024',
                    title: 'Rear Bracket Static Load',
                    coordinate_system: 'global_cartesian',
                },
                unit_system: {
                    length: 'mm',
                    force: 'N',
                    time: 's',
                    temperature: 'C',
                    declared_system: 'SI',
                },
                warnings: [],
            }),
        ));

        await expect(fetchModelMetadata('ready-model')).resolves.toEqual({
            metadata: {
                source_filename: 'rear_bracket_ready.vtu',
                file_format: 'vtu',
                format_version: '2.2',
                solver_name: 'Abaqus',
                solver_version: '2024',
                title: 'Rear Bracket Static Load',
                coordinate_system: 'global_cartesian',
                unit_system: {
                    length: 'mm',
                    force: 'N',
                    time: 's',
                    temperature: 'C',
                    declared_system: 'SI',
                },
            },
            warnings: [],
        });
    });
});
