import '../css/base.styl';
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
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create a cube.
// BoxGeometry contains all points (vertices) and fill (faces) of the cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Color it with a material. Let's use MeshBasicMaterial.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  specular: 0x119911
});

// Create a mesh, an object that takes a geometry and applies a material to it,
// which we then can insert to our scene, and move freely around.
let cubes = [];
[[-3, 0, 0], [0, 0, 0], [3, 0, 0]].forEach(coordinates => {
  let [x, y, z] = coordinates;
  let cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);
  cubes.push(cube);
  scene.add(cube);
});

// The camera will collide with the cube at 0, 0, 0, so move the camera.
camera.position.z = 5;

// Add two 45-degree angle lights from behind the camera.
const topDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
topDirectionalLight.position.set(-10, 10, 10);
scene.add(topDirectionalLight);

const bottomDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
bottomDirectionalLight.position.set(10, 10, 10);
scene.add(bottomDirectionalLight);


function animate() {
  // Render loop to render the scene at 60fps.
  requestAnimationFrame(animate);

  // Animate the cube rotating.
  cubes.forEach(cube => {
    cube.rotation.y += .01;
    cube.rotation.z += .001;
  });

  renderer.render(scene, camera);
}
animate();



// Keybindings to set camera position.
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

// Keybindings to set camera rotation.
key('i', () => {
  camera.rotation.x += .1;
});
key('j', () => {
  camera.rotation.y += .1;
});
key('k', () => {
  camera.rotation.x -= .1;
});
key('l', () => {
  camera.rotation.y -= .1;
});

key('space', () => {
  // Jump.
  camera.position.y += 1;
  setTimeout(() => {
    camera.position.y -= 1;
  }, 500);
});
