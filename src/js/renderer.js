/*
  Add the renderer, which is a <canvas>, to the document.
*/
import THREE from 'three';


const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0xaaaaaa, 0);
renderer.setSize(window.innerWidth, window.innerHeight);


window.addEventListener('resize', e => {
  // Handle window resize.
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


export default renderer;