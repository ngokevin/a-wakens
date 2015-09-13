import THREE from 'three';


// BoxGeometry contains all points (vertices) and fill (faces) of the cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);


// Color it with a material. Phong material for smooth shading.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  specular: 0x119911
});


// Create cubes.
// Create a mesh, an object that takes a geometry and applies a material to it,
// which we then can insert to our scene, and move freely around.
let cubes = [];
[[-3, 0, -10], [0, 0, -10], [3, 0, -10]].forEach(coordinates => {
  let [x, y, z] = coordinates;
  let cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);

  cube.animate = () => {
    // Animate the cube rotating.
    cube.rotation.y += .01;
    cube.rotation.z += .001;
  };

  cubes.push(cube);
});


export {cubes};
