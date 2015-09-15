import Dancer from 'dancer';
import key from 'keymaster';


const dancer = new Dancer();
dancer.load({
  src: '/audio/sample.mp3'
});


key('p', () => {
  // Play music.
  if (dancer.isPlaying()) {
    dancer.pause();
  } else {
    dancer.play();
  }
});


export default dancer;
