const camera = new THREE.PerspectiveCamera(
  40,  // Field of view.
  window.innerWidth / window.innerHeight,  // Aspect ratio (width / height).
  0.1,  // Near clipping plane (determines maximum proximity to render).
  10000  // Far clipping plane (determines maximum distance to render).
);


window.addEventListener('resize', e => {
  // Handle window resize.
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}, false);


export default camera;
