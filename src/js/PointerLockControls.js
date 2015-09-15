import _ from 'lodash';


export default class PointerLockControls {
  constructor(camera) {
    camera.rotation.set(0, 0, 0);

    this.enabled = false;

    this.pitchObject = new THREE.Object3D();
    this.pitchObject.add(camera);

    this.yawObject = new THREE.Object3D();
    this.yawObject.add(this.pitchObject);
    this.camera = this.yawObject;

    this.getDirection();
    document.addEventListener('mousemove', this.onMouseMove, false);
  }

  onMouseMove = _.throttle(event => {
    if (!this.enabled) {
      return;
    }
    const movementX = event.movementX || event.mozMovementX ||
                      event.webkitMovementX || 0;
    const movementY = event.movementY || event.mozMovementY ||
                      event.webkitMovementY || 0;

    this.yawObject.rotation.y -= movementX * 0.002;
    this.pitchObject.rotation.x -= movementY * 0.002;

    this.pitchObject.rotation.x = Math.max(
      -1 * Math.PI / 2,
      Math.min(Math.PI / 2, this.pitchObject.rotation.x)
    );
  }, 1 / 60)

  getDirection() {
    // Assumes the camera itself is not rotated.
    const direction = new THREE.Vector3(0, 0, -1);
    const rotation = new THREE.Euler(0, 0, 0, "YXZ");

    return function(v) {
      rotation.set(this.pitchObject.rotation.x, this.yawObject.rotation.y, 0);
      v.copy(direction).applyEuler(rotation);
      return v;
    }
  }
}
