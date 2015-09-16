// BoxGeometry contains all points (vertices) and fill (faces) of the bar.
const geometry = new THREE.BoxGeometry(1, 1, 1);


// Color it with a material. Phong material for smooth shading.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x226622,
  specular: 0x119911
});


class Bar {
  /*
    Individual bar for the visualizer.

    coordinates -- [x, y, z] position of the bar.
  */
  constructor(coordinates) {
    const [x, y, z] = coordinates;

    this.bar = new THREE.Mesh(geometry, material);
    this.bar.position.set(x, y, z);
  }

  setMagnitude(frequency) {
    this.bar.scale.y = frequency * 500 + 1;
    this.bar.position.y = (this.bar.scale.y / 2) - 1;
  }
}


class BarVisualization {
  /*
    Visualizer bars representing a spectrum, completing the visualization.

    distance -- radius of the circle the bars will sit from the origin.
    numBars -- number of visualizer bars to render.
    spectrum -- 512-element array of frequencies (from dancer.js).
  */
  constructor(opts={}) {
    const spectrum = opts.spectrum || [];
    const distance = opts.distance || 20;

    this.numBars = opts.numBars || 512;

    // Lay bars in a circle around the origin.
    let positions = [];
    for (let i = 0; i < this.numBars; i++) {
      let rads = i * (2 * Math.PI) / this.numBars;
      positions.push([
        Math.cos(rads) * distance,
        0,
        Math.sin(rads) * distance
      ]);
    }

    this.bars = positions.map(xyz => new Bar(xyz));

    if (spectrum) {
      this.setSpectrum(spectrum);
    }
  }

  getTHREEBars() {
    /* Returns the 3D bars, rather than the Bar classes. */
    return this.bars.map(bar => bar.bar);
  }

  setSpectrum(spectrum) {
    /*
      Updates the spectrum, changing the height of the bars.
    */
    // numBars < frequencies, so we have to sample and get every X frequency.
    const step = Math.floor(spectrum.length / this.numBars);

    this.bars.forEach((bar, i) => {
      let freq = spectrum[i * step];
      bar.setMagnitude(freq);
    });
  }
}


export default new BarVisualization();
