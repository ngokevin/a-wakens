import fragmentShader from '../shaders/fragment';
import vertexShader from '../shaders/vertex';


const uniforms = {
  topColor: {
    type: 'c',
    value: new THREE.Color(0xAAAACC)
  },
  bottomColor: {
    type: 'c',
    value: new THREE.Color(0x222244)
  },
  offset: {
    type: 'f',
    value: 400
  },
  exponent: {
    type: 'f',
    value: 0.6
  }
}

const geometry = new THREE.SphereGeometry(1000, 32, 15);
const material = new THREE.ShaderMaterial({
  fragmentShader: fragmentShader,
  side: THREE.BackSide,
  uniforms: uniforms,
  vertexShader: vertexShader,
});


export default new THREE.Mesh(geometry, material);
