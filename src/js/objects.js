import THREE from 'three';


// BoxGeometry contains all points (vertices) and fill (faces) of the cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);


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

    this.velocity = Math.random() * 3 + 1;  // Speed of growth.
    this.yPos = y;  // Cancels out yScale.
    this.yScale = 1;

    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(x, y, z);
    this.cube.animate = this.animate;
  }

  animate = delta => {
    if (Math.random() < .05 || this.yPos < 0) {
      // Change direction of growth of the bar.
      this.velocity *= -1;
    }

    const yChange = this.velocity * delta;
    this.yScale += yChange;
    this.yPos += yChange / 2;

    this.cube.scale.y = this.yScale;
    this.cube.position.y = this.yPos;
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
