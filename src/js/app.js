import {registerComponent} from 'aframe';
import {component} from 'aframe-layout';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import Dancer from 'dancer';
import key from 'keymaster';
import React from 'react';
import ReactDOM from 'react-dom';

import {LIGHTSABER_GREEN} from './colors';
import BarVisualization from './components/BarVisualization';
import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Ground from './components/Ground';
import Light from './components/Light';
import Orb from './components/Orb';
import Sky from './components/Sky';

registerComponent('layout', component);

class AWakens extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.t = 0;

    this.audio = new Dancer();
    this.audio.load({
      src: 'audio/starwars.mp3'
    });
    this.audio.play();

    window.addEventListener('click', () => {
      // iOS.
      var context = this.audio.audioAdapter.context;
      var buffer = context.createBuffer(1, 1, 22050);
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(0);
    }, false);

    key('p', () => {
      // Play music.
      const audio = this.getAudio();
      if (audio.isPlaying()) {
        audio.pause();
      } else {
        audio.play();
      }
    });

    this.state = {
      avgFrequency: 1,
      spectrum: [],
    };

    registerComponent('dancer', {
      tick: t => {
        this.t++;

        if (this.audio.isPlaying() && this.t % 2 === 0) {
          this.setState({
            avgFrequency: this.audio.getFrequency(0, 511) * 1000,
            spectrum: this.audio.getSpectrum()
          });
        }
      }
    });
  }

  changeSong = () => {
    this.audio.pause();

    setTimeout(() => {
      this.audio = new Dancer();
      this.audio.load({
        src: 'audio/endor.mp3'
      });
      this.audio.play();
    }, 50);
  }

  getAudio() {
    return this.audio;
  }

  render() {
    return (
      <div>
        <a-assets>
          <img id="sky" src="img/sky.jpg"/>
          <img id="ground" src="img/ground.jpg"/>
          <img id="tiefighter" src="img/tiefighter.png"/>
        </a-assets>

        <Scene dancer>
          <Camera><Cursor fuse={true} maxDistance="100" timeout="500"/></Camera>

          <Sky/>
          <Ground/>

          <Light type="ambient" color="#AAA"/>
          <Light type="directional" intensity={1} position="1 1 0"/>
          <Orb/>
          <Orb direction="reverse"/>

          <Entity>
            <Entity geometry="primitive: plane"
                    material="src: #tiefighter; shader: flat; transparent: true"
                    position="0 10 -10" look-at="[camera]" scale="3 3 3"
                    onClick={this.changeSong}/>
            <Animation attribute="rotation" dur="64000" easing="linear" repeat="indefinite"
                       to="0 360 0"/>
          </Entity>

          <BarVisualization spectrum={this.state.spectrum}
                            startSpectrum={0}
                            endSpectrum={128}
                            num={50}/>
        </Scene>
      </div>
    );
  }
}

ReactDOM.render(<AWakens/>, document.querySelector('.scene-container'));
