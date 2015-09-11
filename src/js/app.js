import THREE from 'three';
import key from 'keymaster';


// Set up the scene, camera, and renderer.
// There are several cameras in Three.js, Let's use PerspectiveCamera.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,  // Field of view.
  window.innerWidth / window.innerHeight,  // Aspect ratio (width / height).
  0.1,  // Near clipping plane (determines maximum proximity to render).
  1000  // Far clipping plane (determines maximum distance to render).
);


// Add the renderer, which is a <canvas>, to the document.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create a cube.
// BoxGeometry contains all points (vertices) and fill (faces) of the cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Color it with a material. Let's use MeshBasicMaterial.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// Create a mesh, an object that takes a geometry and applies a material to it,
// which we then can insert to our scene, and move freely around.
const cube = new THREE.Mesh(geometry, material);
// Adds the cube to 0, 0, 0.
scene.add(cube);
// The camera will collide with the cube at 0, 0, 0, so move the camera.
camera.position.z = 5;


function render() {
  // Render loop to render the scene at 60fps.
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();


// Keybindings to move the camera.
key('w', () => {
  camera.position.z -= 1;
});
key('a', () => {
  camera.position.x -= 1;
});
key('s', () => {
  camera.position.z += 1;
});
key('d', () => {
  camera.position.x += 1;
});
key('space', () => {
  // Jump.
  camera.position.y += 1;
  setTimeout(() => {
    camera.position.y -= 1;
  }, 500);
});
