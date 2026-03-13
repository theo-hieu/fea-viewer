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

export function buildElementPickingColors(sourceElementIndices: ArrayLike<number>): Float32Array {
    const colors = new Float32Array(sourceElementIndices.length * 3);
    for (let i = 0; i < sourceElementIndices.length; i++) {
        const sourceElementIndex = sourceElementIndices[i]!;
        const [r, g, b] = encodeId(sourceElementIndex + 1);
        colors[i * 3] = r;
        colors[i * 3 + 1] = g;
        colors[i * 3 + 2] = b;
    }
    return colors;
}

export function buildNodePickingColors(sourceNodeIndices: ArrayLike<number>): Float32Array {
    const colors = new Float32Array(sourceNodeIndices.length * 3);
    for (let i = 0; i < sourceNodeIndices.length; i++) {
        const sourceNodeIndex = sourceNodeIndices[i]!;
        const [r, g, b] = encodeId(sourceNodeIndex + 1);
        colors[i * 3] = r;
        colors[i * 3 + 1] = g;
        colors[i * 3 + 2] = b;
    }
    return colors;
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
        _surfaceElementMap: Int32Array,
        _nNodes: number,
        mode: 'node' | 'element',
    ): void {
        this.clearPickingScene();

        const nVertices = geometry.getAttribute('position').count;
        if (nVertices === 0) return;

        const sourceNodeIndexAttr = geometry.getAttribute('sourceNodeIndex') as THREE.BufferAttribute | undefined;
        const sourceElementIndexAttr = geometry.getAttribute('sourceElementIndex') as THREE.BufferAttribute | undefined;
        if (!sourceNodeIndexAttr) return;

        const colors = mode === 'element' && sourceElementIndexAttr
            ? buildElementPickingColors(sourceElementIndexAttr.array as ArrayLike<number>)
            : buildNodePickingColors(sourceNodeIndexAttr.array as ArrayLike<number>);

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

export function encodeId(id: number): [number, number, number] {
    return [
        ((id >> 16) & 0xFF) / 255,
        ((id >> 8) & 0xFF) / 255,
        (id & 0xFF) / 255,
    ];
}

export function decodeId(r: number, g: number, b: number): number {
    return (r << 16) | (g << 8) | b;
}
