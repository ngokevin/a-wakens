import {registerComponent} from 'aframe-core';
import {component} from 'aframe-layout';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import audio from './audio';
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

    this.state = {
      avgFrequency: 1,
      spectrum: [],
    };
  }

  changeSong = () => {
    audio.pause();
    audio.load({
      src: 'audio/endor.mp3'
    });
    audio.play();
  }

  tickAudio = () => {
    this.t++;

    if (audio.isPlaying() && this.t % 2 === 0) {
      this.setState({
        avgFrequency: audio.getFrequency(0, 511) * 1000,
        spectrum: audio.getSpectrum()
      });
    }
  }

  render() {
    return (
      <div>
        <a-assets>
          <img id="sky" src="img/sky.jpg"/>
          <img id="ground" src="img/ground.jpg"/>
          <img id="tiefighter" src="img/tiefighter.png"/>
        </a-assets>

        <Scene onTick={this.tickAudio}>
          <Camera><Cursor fuse={true} maxDistance="100"/></Camera>

          <Sky/>
          <Ground/>

          <Light type="ambient" color="#AAA"/>
          <Light type="directional" intensity={this.state.avgFrequency} position="1 1 0"/>
          <Orb/>
          <Orb direction="reverse"/>

          <Entity geometry="primitive: plane"
                  material="src: #tiefighter; shader: flat; transparent: true"
                  position="0 10 -10" look-at="[camera]" scale="3 3 3"
                  onClick={this.changeSong}/>

          <BarVisualization spectrum={this.state.spectrum}
                            startSpectrum={0}
                            endSpectrum={100}
                            num={50}/>
        </Scene>
      </div>
    );
  }
}

ReactDOM.render(<AWakens/>, document.querySelector('.scene-container'));
