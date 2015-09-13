import THREE from 'three';


const hemiLight = new THREE.HemisphereLight(0xaabbff, 0x040404, 1);
hemiLight.position.y = 500;


// Two 45-degree angle lights from behind the camera.
const topDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
topDirectionalLight.position.set(-10, 10, 10);

const bottomDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
bottomDirectionalLight.position.set(10, 10, 10);


export default [
  hemiLight,
  bottomDirectionalLight,
  topDirectionalLight
];
