import THREE from 'three';


// BoxGeometry contains all points (vertices) and fill (faces) of the cube.
const geometry = new THREE.BoxGeometry(1, 5, 1);


// Color it with a material. Phong material for smooth shading.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x00ff00,
  specular: 0x119911
});


class VisualizerBar {
  /*
    Attaches animate functions to objects, keeping track of state.
  */
  constructor(coordinates) {
    const [x, y, z] = coordinates;

    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(x, y, z);
    this.cube.animate = this.animate;
  }

  animate() {
    this.rotation.y += .01;
    this.rotation.z += .001;
  }
}


let positions = [];
const distance = 10;
const numCubes = 10;
for (let i = 0; i < numCubes; i++) {
  // Lay out cubes in a circle around the origin.
  let rads = i * (2 * Math.PI) / numCubes;

  positions.push([
    Math.cos(rads) * distance,
    0,
    Math.sin(rads) * distance
  ]);
}
const cubes = positions.map(xyz => new VisualizerBar(xyz).cube);


export {cubes};
