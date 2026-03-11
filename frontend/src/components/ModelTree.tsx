/**
 * FEA Viewer — ModelTree Component
 * ===================================
 *
 * Per 04 §3.1: assembly → instances → parts → sets, with show/hide/isolate.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import type { TreeNode } from '@/utils/feaTypes';

export const ModelTree: React.FC = () => {
    const tree = useModelStore((s) => s.tree);

    if (!tree) {
        return <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>No model loaded</div>;
    }

    return (
        <div style={{ maxHeight: 200, overflowY: 'auto' }}>
            <TreeNodeComponent node={tree} depth={0} />
        </div>
    );
};

const TreeNodeComponent: React.FC<{ node: TreeNode; depth: number }> = ({ node, depth }) => {
    const partVisibility = useViewStore((s) => s.partVisibility);
    const setPartVisibility = useViewStore((s) => s.setPartVisibility);
    const isolatePart = useViewStore((s) => s.isolatePart);

    const isVisible = partVisibility[node.id] !== false;
    const isPart = node.type === 'part';

    return (
        <div>
            <div
                className={`tree-node ${!isVisible ? 'tree-node--hidden' : ''}`}
                style={{ paddingLeft: depth * 16 + 8 }}
            >
                <span className="tree-node__icon">
                    {node.type === 'assembly' && '📦'}
                    {node.type === 'instance' && '🔗'}
                    {node.type === 'part' && '🧊'}
                    {node.type === 'node_set' && '📍'}
                    {node.type === 'element_set' && '📐'}
                </span>
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {node.name}
                </span>

                {isPart && (
                    <span className="tree-node__actions">
                        <button
                            className="tree-action-btn"
                            onClick={(e) => { e.stopPropagation(); setPartVisibility(node.id, !isVisible); }}
                            title={isVisible ? 'Hide' : 'Show'}
                        >
                            {isVisible ? '👁' : '👁‍🗨'}
                        </button>
                        <button
                            className="tree-action-btn"
                            onClick={(e) => { e.stopPropagation(); isolatePart(node.id); }}
                            title="Isolate"
                        >
                            ◎
                        </button>
                    </span>
                )}
            </div>

            {node.children?.map((child) => (
                <TreeNodeComponent key={child.id} node={child} depth={depth + 1} />
            ))}
        </div>
    );
};
