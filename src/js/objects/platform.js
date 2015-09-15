// BoxGeometry contains all points (vertices) and fill (faces) of the bar.
const geometry = new THREE.BoxGeometry(500, 10, 500);


// Color it with a material. Phong material for smooth shading.
// All materials take an object to give it properties. Let's use a color.
const material = new THREE.MeshPhongMaterial({
  color: 0x111111,
  specular: 0xdddddd
});


const platform = new THREE.Mesh(geometry, material);
platform.position.set(0, -8, 0);


export default platform;
