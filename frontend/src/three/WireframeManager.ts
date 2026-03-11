/**
 * FEA Viewer — WireframeManager
 * ===============================
 *
 * Per 02b §6.2: LineSegments overlay from edge extraction, toggle on/off.
 */

import * as THREE from 'three';

export class WireframeManager {
    private wireframeMeshes: THREE.LineSegments[] = [];

    /**
     * Create wireframe overlay for a given geometry.
     */
    createWireframe(
        geometry: THREE.BufferGeometry,
        scene: THREE.Scene,
    ): void {
        this.clear(scene);

        const edges = new THREE.EdgesGeometry(geometry, 15); // 15° threshold
        const material = new THREE.LineBasicMaterial({
            color: 0x8b949e,
            transparent: true,
            opacity: 0.4,
            depthTest: true,
        });

        const wireframe = new THREE.LineSegments(edges, material);
        wireframe.visible = false; // Hidden by default
        wireframe.name = 'wireframe';
        wireframe.renderOrder = 1; // Render on top

        scene.add(wireframe);
        this.wireframeMeshes.push(wireframe);
    }

    /**
     * Toggle wireframe visibility.
     */
    setVisible(visible: boolean): void {
        for (const mesh of this.wireframeMeshes) {
            mesh.visible = visible;
        }
    }

    /**
     * Check if wireframe is visible.
     */
    isVisible(): boolean {
        return this.wireframeMeshes.length > 0 && this.wireframeMeshes[0]!.visible;
    }

    /**
     * Clean up wireframe resources.
     */
    clear(scene: THREE.Scene): void {
        for (const mesh of this.wireframeMeshes) {
            scene.remove(mesh);
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
        }
        this.wireframeMeshes = [];
    }
}
