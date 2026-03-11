/**
 * FEA Viewer — PickingManager
 * ==============================
 *
 * Per 02b §6.6: GPU ID-picking with off-screen render target.
 * - Each entity gets a unique 24-bit ID encoded as RGB
 * - readPixels at click position → decode ID
 * - Node-pick and element-pick modes
 * - Probed values come from CPU-side Float64 arrays, NOT GPU buffers
 */

import * as THREE from 'three';

export interface PickResult {
    mode: 'node' | 'element';
    id: number;
}

export class PickingManager {
    private pickingTarget: THREE.WebGLRenderTarget;
    private pickingScene: THREE.Scene;
    private pickingMeshes: THREE.Mesh[] = [];
    private pixelBuffer: Uint8Array;

    constructor(width: number, height: number) {
        this.pickingTarget = new THREE.WebGLRenderTarget(width, height, {
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
        });
        this.pickingScene = new THREE.Scene();
        this.pixelBuffer = new Uint8Array(4);
    }

    /**
     * Build the picking scene from surface geometry and element map.
     *
     * @param geometry - Surface BufferGeometry
     * @param surfaceElementMap - surface tri → source element index
     * @param nNodes - total node count for node-pick mode
     * @param mode - 'node' or 'element'
     */
    buildPickingScene(
        geometry: THREE.BufferGeometry,
        surfaceElementMap: Int32Array,
        _nNodes: number,
        mode: 'node' | 'element',
    ): void {
        this.clearPickingScene();

        const indexAttr = geometry.getIndex();
        if (!indexAttr) return;

        const indices = indexAttr.array as Uint32Array | Int32Array;
        const nTris = indices.length / 3;

        // Build per-vertex color attribute for ID encoding
        const nVertices = geometry.getAttribute('position').count;
        const colors = new Float32Array(nVertices * 3);

        if (mode === 'element') {
            // Element-pick: each triangle gets its element ID from surfaceElementMap
            for (let tri = 0; tri < nTris; tri++) {
                const elemId = surfaceElementMap[tri] ?? 0;
                const [r, g, b] = encodeId(elemId + 1); // +1 so 0 means "no pick"
                for (let v = 0; v < 3; v++) {
                    const vertIdx = indices[tri * 3 + v]!;
                    colors[vertIdx * 3] = r;
                    colors[vertIdx * 3 + 1] = g;
                    colors[vertIdx * 3 + 2] = b;
                }
            }
        } else {
            // Node-pick: each vertex gets its own node ID
            for (let i = 0; i < nVertices; i++) {
                const [r, g, b] = encodeId(i + 1); // +1 so 0 means "no pick"
                colors[i * 3] = r;
                colors[i * 3 + 1] = g;
                colors[i * 3 + 2] = b;
            }
        }

        const pickGeom = geometry.clone();
        pickGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.ShaderMaterial({
            vertexShader: `
        attribute vec3 color;
        attribute vec3 displacement;
        uniform float u_deform_scale;
        varying vec3 v_pickColor;
        void main() {
          vec3 deformed = position + u_deform_scale * displacement;
          v_pickColor = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
        }
      `,
            fragmentShader: `
        varying vec3 v_pickColor;
        void main() {
          gl_FragColor = vec4(v_pickColor, 1.0);
        }
      `,
            uniforms: {
                u_deform_scale: { value: 0.0 },
            },
            side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(pickGeom, material);
        this.pickingScene.add(mesh);
        this.pickingMeshes.push(mesh);
    }

    /**
     * Pick at a screen position.
     * Returns the decoded entity ID, or null if nothing was picked.
     */
    pick(
        renderer: THREE.WebGLRenderer,
        camera: THREE.Camera,
        x: number,
        y: number,
        mode: 'node' | 'element',
    ): PickResult | null {
        // Render picking scene
        renderer.setRenderTarget(this.pickingTarget);
        renderer.render(this.pickingScene, camera);
        renderer.setRenderTarget(null);

        // Read pixel at click pos
        renderer.readRenderTargetPixels(
            this.pickingTarget,
            x, this.pickingTarget.height - y,
            1, 1,
            this.pixelBuffer,
        );

        const id = decodeId(
            this.pixelBuffer[0]!,
            this.pixelBuffer[1]!,
            this.pixelBuffer[2]!,
        );

        if (id === 0) return null; // Background
        return { mode, id: id - 1 }; // -1 to undo the +1 offset
    }

    /**
     * Resize the picking render target.
     */
    resize(width: number, height: number): void {
        this.pickingTarget.setSize(width, height);
    }

    /**
     * Update deformation scale on picking meshes.
     */
    setDeformScale(scale: number): void {
        for (const mesh of this.pickingMeshes) {
            const mat = mesh.material as THREE.ShaderMaterial;
            if (mat.uniforms['u_deform_scale']) {
                mat.uniforms['u_deform_scale'].value = scale;
            }
        }
    }

    private clearPickingScene(): void {
        for (const mesh of this.pickingMeshes) {
            this.pickingScene.remove(mesh);
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
        }
        this.pickingMeshes = [];
    }

    dispose(): void {
        this.clearPickingScene();
        this.pickingTarget.dispose();
    }
}

// --- ID Encoding/Decoding (24-bit → RGB) ---

function encodeId(id: number): [number, number, number] {
    return [
        ((id >> 16) & 0xFF) / 255,
        ((id >> 8) & 0xFF) / 255,
        (id & 0xFF) / 255,
    ];
}

function decodeId(r: number, g: number, b: number): number {
    return (r << 16) | (g << 8) | b;
}
