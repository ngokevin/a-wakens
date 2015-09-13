import THREE from 'three';
import PointerLockControls from './lib/PointerLockControls';


const camera = new THREE.PerspectiveCamera(
  40,  // Field of view.
  window.innerWidth / window.innerHeight,  // Aspect ratio (width / height).
  0.1,  // Near clipping plane (determines maximum proximity to render).
  10000  // Far clipping plane (determines maximum distance to render).
);


// Off-set the camera from the center.
camera.position.z = 5;


export default camera;
