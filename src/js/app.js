import THREE from 'three';
import key from 'keymaster';

import camera from './camera';
import controls from './controls';
import lights from './lights';
import {cubes} from './objects';
import skyBox from './skyBox';
import '../css/base.styl';


// Set up the scene, camera, and renderer.
// There are several cameras in Three.js, Let's use PerspectiveCamera.
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 1000, 10000);


// Add the renderer, which is a <canvas>, to the document.
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xaaaaaa, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


scene.add(controls.getObject());
scene.add(skyBox);
scene.add.apply(scene, lights);
scene.add.apply(scene, cubes);


function animate() {
  // Render loop to render the scene at 60fps.
  requestAnimationFrame(animate);

  cubes.forEach(cube => cube.animate());

  renderer.render(scene, camera);
}
animate();


// Keybindings to set camera position.
key('w', () => {
  camera.position.z -= .05;
});
key('a', () => {
  camera.position.x -= .05;
});
key('s', () => {
  camera.position.z += .05;
});
key('d', () => {
  camera.position.x += .05;
});
key('i', () => {
  camera.rotation.x += .05;
});
key('k', () => {
  camera.rotation.x -= .05;
});
key('space', () => {
  // Jump.
  camera.position.y += 1;

  setTimeout(() => {
    camera.position.y -= 1;
  }, 500);
});
