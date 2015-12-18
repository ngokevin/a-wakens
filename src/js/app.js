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
import Ground from './components/Ground';
import Light from './components/Light';
import Sky from './components/Sky';

registerComponent('layout', component);

class Udioworld extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.t = 0;

    this.state = {
      avgFrequency: 1,
      spectrum: [],
    };
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

  render () {
    return (
      <div>
        <a-assets>
          <img id="sky" src="img/sky.jpg"/>
          <img id="ground" src="img/ground.jpg"/>
        </a-assets>

        <Scene onTick={this.tickAudio}>
          <Camera/>

          <Sky/>
          <Ground/>

          <Light type="ambient" color="#AAA"/>
          <Light type="directional" intensity={this.state.avgFrequency} position="1 1 0"/>
          <Entity>
            <Animation attribute="rotation" easing="linear" dur="10000" repeat="indefinite"
                       to="0 360 0"/>
            <Entity geometry="primitive: sphere; radius: 0.2"
                    material={`color: ${LIGHTSABER_GREEN}; shader: flat`}
                    light={`color: ${LIGHTSABER_GREEN}; type: point; intensity: 10;`}
                    position="-15 0.5 0"/>
          </Entity>

          <BarVisualization spectrum={this.state.spectrum}
                            startSpectrum={0}
                            endSpectrum={100}
                            num={50}/>
        </Scene>
      </div>
    );
  }
}

ReactDOM.render(<Udioworld/>, document.querySelector('.scene-container'));
