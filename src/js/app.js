import 'aframe-core';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import audio from './audio';
import BarVisualization from './components/BarVisualization';
import Camera from './components/Camera';
import Ground from './components/Ground';
import Light from './components/Light';
import Sky from './components/Sky';

class Udioworld extends React.Component {
  constructor(props, state) {
    super(props, state);

    this.state = {
      spectrum: []
    };
  }

  tickAudio() {
    this.setState({
      spectrum: audio.getSpectrum()
    });
  }

  render () {
    return (
      <Scene onTick={this.tickAudio}>
        <Camera/>

        <Sky/>

        <Light type="ambient" color="#888"/>
        <Light type="directional" intensity="0.5" position="-1 1 0"/>
        <Light type="directional" intensity="1" position="1 1 0"/>

        <BarVisualization spectrum={this.state.spectrum}/>
      </Scene>
    );
  }
}

ReactDOM.render(<Udioworld/>, document.querySelector('.scene-container'));
