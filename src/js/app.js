import THREE from 'three';

import camera from './camera';
import controls from './controls';
import lights from './lights';
import {cubes} from './objects';
import renderer from './renderer';
import skyBox from './skyBox';
import '../css/base.styl';


// Setup the scene.
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 1000, 10000);

scene.add(controls.camera);
scene.add(skyBox);
scene.add.apply(scene, lights);
scene.add.apply(scene, cubes);


document.body.appendChild(renderer.domElement);


function animate() {
  // Render loop.
  requestAnimationFrame(animate);

  cubes.forEach(cube => cube.animate());

  renderer.render(scene, camera);
}
animate();
