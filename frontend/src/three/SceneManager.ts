/**
 * FEA Viewer — SceneManager
 * ===========================
 *
 * Per 02b §6.2 & 04 §3.2: create scene, camera, renderer, OrbitControls,
 * lights, resize handling, zoom-to-fit.
 *
 * Uses raw Three.js — NOT React Three Fiber.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class SceneManager {
    public readonly scene: THREE.Scene;
    public readonly camera: THREE.PerspectiveCamera;
    public readonly renderer: THREE.WebGLRenderer;
    public readonly controls: OrbitControls;

    private container: HTMLElement;
    private animationId: number | null = null;
    private renderCallbacks: Array<() => void> = [];

    constructor(container: HTMLElement) {
        this.container = container;

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0d1117);

        // Camera
        const aspect = container.clientWidth / container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.01, 10000);
        this.camera.position.set(5, 5, 5);

        // Renderer — require WebGL2
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.1;
        this.controls.screenSpacePanning = true;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(5, 10, 7);
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
        dirLight2.position.set(-5, -3, -5);
        this.scene.add(dirLight2);

        // Grid helper (subtle)
        const grid = new THREE.GridHelper(20, 20, 0x30363d, 0x21262d);
        grid.position.y = -0.01;
        this.scene.add(grid);

        // Axes helper
        const axes = new THREE.AxesHelper(1);
        this.scene.add(axes);

        // Resize observer
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
    }

    /**
     * Check if WebGL2 is available.
     */
    static isWebGL2Available(): boolean {
        try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl2'));
        } catch {
            return false;
        }
    }

    /**
     * Register a callback to be called each render frame.
     */
    onRender(callback: () => void): void {
        this.renderCallbacks.push(callback);
    }

    /**
     * Start the animation loop.
     */
    start(): void {
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            this.controls.update();
            for (const cb of this.renderCallbacks) cb();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }

    /**
     * Stop the animation loop.
     */
    stop(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    /**
     * Fit camera to show the entire scene bounding box.
     */
    zoomToFit(): void {
        const box = new THREE.Box3().setFromObject(this.scene);
        if (box.isEmpty()) return;

        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        const distance = maxDim / (2 * Math.tan(fov / 2)) * 1.5;

        this.camera.position.copy(center).add(new THREE.Vector3(distance * 0.7, distance * 0.5, distance * 0.7));
        this.camera.lookAt(center);
        this.controls.target.copy(center);
        this.controls.update();
    }

    /**
     * Handle container resize.
     */
    private handleResize(): void {
        const w = this.container.clientWidth;
        const h = this.container.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    }

    /**
     * Clean up all resources.
     */
    dispose(): void {
        this.stop();
        window.removeEventListener('resize', this.handleResize);
        this.controls.dispose();
        this.renderer.dispose();
        if (this.renderer.domElement.parentElement) {
            this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
        }
    }
}
