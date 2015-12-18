import {utils} from 'aframe-core';
import {Entity} from 'aframe-react';
import React from 'react';

import {LIGHTSABER_RED, LIGHTSABER_BLUE} from '../colors';

export default class BarVisualization extends React.Component {
  static propTypes = {
    num: React.PropTypes.number,
    radius: React.PropTypes.number,
    spectrum: React.PropTypes.any
  };

  static defaultProps = {
    num: 512
  };

  renderBars() {
    let bars = [];
    const step = Math.floor(this.props.spectrum.length / this.props.num);

    let color = LIGHTSABER_RED;
    for (let i = 0; i < this.props.num; i++) {
      if (i > this.props.num / 2) { color = LIGHTSABER_BLUE; }
      bars.push(
        <Bar key={i} color={color} frequency={this.props.spectrum[i * step]}/>
      );
    }

    return bars;
  }

  render() {
    return (
      <Entity layout={{type: 'circle', margin: 20}}
              position={this.props.position || '0 0 0'}>
        {this.renderBars()}
      </Entity>
    );
  }
}

export class Bar extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    frequency: React.PropTypes.number
  };

  static defaultProps = {
    color: 'blue',
    frequency: 0
  };

  render() {
    const yScale = this.props.frequency * 500 + 1;
    const scale = {x: 1, y: yScale, z: 1};
    return (
      <Entity>
        <Entity geometry={{primitive: 'cylinder', height: 1, radius: 1}}
                material={{color: this.props.color, roughness: 0.4}}
                scale={utils.coordinates.stringify(scale)}/>
        <Entity geometry="primitive: ring; radiusInner: 1.1; radiusOuter: 1.4;
                          segmentsTheta: 32"
                material="color: #FFF; side: double; shader: flat"
                rotation="90 0 0" position="0 0 0"/>
      </Entity>
    );
  }
}
