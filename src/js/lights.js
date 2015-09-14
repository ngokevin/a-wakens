import THREE from 'three';


// Hemisphere light.
const hemiLight = new THREE.HemisphereLight(0x0077ff, 0x00ff77, 1);
hemiLight.position.y = 500;


// Two 45-degree angle lights from behind the camera.
const leftDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
leftDirectionalLight.position.set(-10, 10, 10);

const rightDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
rightDirectionalLight.position.set(10, 10, 10);


export default [
  hemiLight,
  rightDirectionalLight,
];
