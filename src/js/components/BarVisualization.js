import {utils} from 'aframe-core';
import {Entity} from 'aframe-react';
import React from 'react';

import {LIGHTSABER_RED, LIGHTSABER_BLUE} from '../colors';

export default class BarVisualization extends React.Component {
  static propTypes = {
    num: React.PropTypes.number,
    radius: React.PropTypes.number,
    endSpectrum: React.PropTypes.num,
    startSpectrum: React.PropTypes.num,
    spectrum: React.PropTypes.any
  };

  static defaultProps = {
    num: 512,
    endSpectrum: 512,
    startSpectrum: 0
  };

  renderBars() {
    let bars = [];
    const endSpectrum = this.props.endSpectrum;
    const startSpectrum = this.props.startSpectrum;
    const step = Math.floor((endSpectrum - startSpectrum) / this.props.num);

    let color = LIGHTSABER_RED;
    for (let i = 0; i < this.props.num; i++) {
      if (i > this.props.num / 2) { color = LIGHTSABER_BLUE; }
      bars.push(
        <Bar key={i} color={color}
             frequency={this.props.spectrum[startSpectrum + i * step]}/>
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
    return (
      <Entity>
        <Entity id="lightsaber-blade"
                geometry={{primitive: 'cylinder', height: 1, radius: 1}}
                material={{color: this.props.color, roughness: 0.5, metallic: 0}}
                scale={`1 ${yScale} 1`}/>
        <Entity id="lightsaber-tip"
                geometry="primitive: sphere"
                material={`color: ${this.props.color}; roughness: 0.5; metallic: 0`}
                position={`0 ${yScale / 2} 0`}/>
        <Entity id="lightsaber-handle"
                geometry="primitive: ring; radiusInner: 1.1; radiusOuter: 1.4;
                          segmentsTheta: 32"
                material="color: #FFF; side: double; shader: flat"
                rotation="90 0 0" position="0 0 0"/>
      </Entity>
    );
  }
}
