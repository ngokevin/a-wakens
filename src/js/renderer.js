/*
  Add the renderer, which is a <canvas>, to the document.
*/
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.setClearColor(0xaaaaaa, 0);
renderer.setSize(window.innerWidth, window.innerHeight);


window.addEventListener('resize', e => {
  // Handle window resize.
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


export default renderer;
