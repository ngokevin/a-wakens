import THREE from 'three';


// Hemisphere light.
const hemiLight = new THREE.HemisphereLight(0xccccff, 0xccccff, 1);
hemiLight.position.y = 500;


// Two 45-degree angle lights from behind the camera.
const leftDirectionalLight = new THREE.DirectionalLight(0xccccff, 0.75);
leftDirectionalLight.position.set(-10, 10, 10);

const rightDirectionalLight = new THREE.DirectionalLight(0xccccff, 0.75);
rightDirectionalLight.position.set(10, 10, 10);


export default [
  hemiLight,
  leftDirectionalLight,
  rightDirectionalLight,
];
