import audio from './audio';
import camera from './camera';
import controls from './controls';
import lights from './lights';
import bars from './objects/bars';
import platform from './objects/platform';
import renderer from './renderer';
import skyBox from './skyBox';
import '../css/base.styl';


// Setup the scene.
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 1000, 10000);

scene.add(controls.camera);
scene.add(skyBox);
scene.add(platform);
scene.add.apply(scene, lights);
scene.add.apply(scene, bars);


document.body.appendChild(renderer.domElement);


let prevTime = performance.now();
function animate() {
  // Render loop.
  requestAnimationFrame(animate);

  let time = performance.now();
  let delta = (time - prevTime) / 1000;
  prevTime = time;
  bars.forEach(bar => bar.animate(delta));

  renderer.render(scene, camera);
}
animate();
