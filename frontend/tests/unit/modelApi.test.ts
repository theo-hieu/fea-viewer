import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchModelTree } from '@/api/models';

function mockJsonResponse(payload: unknown) {
    return {
        ok: true,
        json: async () => payload,
        text: async () => 'error-body',
    } as unknown as Response;
}

describe('model tree normalization', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('handles sparse assembly payloads safely', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockJsonResponse({ assembly: {} }),
        ));

        await expect(fetchModelTree('m1')).resolves.toEqual({
            id: 'assembly-root',
            name: 'Assembly',
            type: 'assembly',
            children: [],
        });
    });

    it('normalizes assembly instances, parts, and sets when children arrays are missing', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockJsonResponse({
                assembly: {
                    instances: [
                        {
                            id: 'inst-1',
                            name: 'Instance 1',
                            parts: [
                                {
                                    id: 'part-1',
                                    name: 'Part 1',
                                    sets: [
                                        { id: 'set-1', name: 'Element Set', set_type: 'element' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            }),
        ));

        await expect(fetchModelTree('m1')).resolves.toEqual({
            id: 'assembly-root',
            name: 'Assembly',
            type: 'assembly',
            children: [
                {
                    id: 'inst-1',
                    name: 'Instance 1',
                    type: 'instance',
                    children: [
                        {
                            id: 'part-1',
                            name: 'Part 1',
                            type: 'part',
                            children: [
                                {
                                    id: 'set-1',
                                    name: 'Element Set',
                                    type: 'element_set',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    });
});
