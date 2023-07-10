import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-under-maintenance',
  templateUrl: './under-maintenance.component.html',
  styleUrls: ['./under-maintenance.component.scss'],
})
export class UnderMaintenanceComponent implements AfterViewInit {
  faCoffee = faCoffee;
  @ViewChild('canvas') private canvasRef: ElementRef;
  // Cube Properties
  @Input() public rotationSpeedX: number = 0.01;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public zeldaCardboxModel: string = '/assets/traffic_cone.gltf';
  // Stage Properties
  @Input() public cameraZ: number = 100;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;
  // Helper Properties
  private camera!: THREE.PerspectiveCamera;
  private light!: THREE.Light;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new GLTFLoader();
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private gltfGroup: THREE.Group;

  /**
   * @private
   * @memberof UnderMaintenanceComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.loader.load(
      this.zeldaCardboxModel,
      (gltf) => {
        // called when the resource is loaded
        this.gltfGroup = gltf.scene;
        this.scene.add(gltf.scene);
      },
      (xhr) => {
        // called while loading is progressing
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        // called when loading has errors
        console.error('An error happened', error);
      }
    );
    //* Camera
    this.light = new THREE.PointLight(0xffffff, 2, this.cameraZ);
    //this.light.position.z = this.cameraZ;
    this.scene.add(this.light);
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
  }
  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * @private
   * @memberof UnderMaintenanceComponent
   */
  private animateCube() {
    if (this.gltfGroup) this.gltfGroup.rotation.y -= this.rotationSpeedY;
  }

  /**
   * @private
   * @memberof UnderMaintenanceComponent
   */
  private startRenderingLoop() {
    //* Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    let component: UnderMaintenanceComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    })();
  }
  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
