import camera from './camera';
import PointerLockControls from './PointerLockControls';


const controls = new PointerLockControls(camera);


const hasPointerLock = 'pointerLockElement' in document ||
                       'mozPointerLockElement' in document ||
                       'webkitPointerLockElement' in document;
if (hasPointerLock) {
  ['pointerlockchange', 'mozpointerlockchange',
   'webkitpointerlockchange'].forEach(eventName => {
    document.addEventListener(eventName, handlePointerLockChange, false);
  });
}


function handlePointerLockChange(e) {
  const element = document.body;

  if (document.pointerLockElement === element ||
      document.mozPointerLockElement === element ||
      document.webkitPointerLockElement === element) {
    controls.enabled = true;
  } else {
    controls.enabled = false;
  }
}


function requestPointerLock() {
  /* Ask the browser to lock the pointer. */
  const element = document.body;

  element.requestPointerLock = element.requestPointerLock ||
                               element.mozRequestPointerLock ||
                               element.webkitRequestPointerLock;

  if (/Firefox/i.test(navigator.userAgent)) {
    function handleFullScreenChange(e) {
      document.removeEventListener('fullscreenchange',
                                   handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange',
                                   handleFullScreenChange);
      element.requestPointerLock();
    }
    document.addEventListener('fullscreenchange', handleFullScreenChange,
                              false);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange,
                              false);
    element.requestFullscreen = element.requestFullscreen ||
                                element.mozRequestFullscreen ||
                                element.mozRequestFullScreen ||
                                element.webkitRequestFullscreen;
    element.requestFullscreen();
  } else {
    element.requestPointerLock();
  }
}


document.body.addEventListener('click', requestPointerLock, false);


export default controls;
