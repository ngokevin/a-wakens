// BoxGeometry contains all points (vertices) and fill (faces) of the bar.
const geometry = new THREE.BoxGeometry(1, 1, 1);


// Color it with a material. Phong material for smooth shading.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x226622,
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
    this.yPosMax = 10;  // Ceiling.
    this.yScale = 1;

    this.bar = new THREE.Mesh(geometry, material);
    this.bar.position.set(x, y, z);
    this.bar.animate = this.animate;
  }

  animate = delta => {
    if (Math.random() < .05 || this.yPos < 0 || this.yPos > this.yPosMax) {
      // Change direction of growth of the bar.
      this.velocity *= -1;
    }

    const yChange = this.velocity * delta;
    this.yScale += yChange;
    this.yPos += yChange / 2;

    this.bar.scale.y = this.yScale;
    this.bar.position.y = this.yPos;
  }
}


let positions = [];
const distance = 20;
const numBars = 25;
for (let i = 0; i < numBars; i++) {
  // Lay out bars in a circle around the origin.
  let rads = i * (2 * Math.PI) / numBars;

  positions.push([
    Math.cos(rads) * distance,
    0,
    Math.sin(rads) * distance
  ]);
}
const bars = positions.map(xyz => new VisualizerBar(xyz).bar);


export default bars;
