import {utils} from 'aframe-core';
import {Entity} from 'aframe-react';
import React from 'react';

export default class BarVisualization extends React.Component {
  static propTypes = {
    num: React.PropTypes.number,
    radius: React.PropTypes.number,
    spectrum: React.PropTypes.array
  };

  static defaultProps = {
    num: 512
  };

  renderBars() {
    let bars = [];
    const step = Math.floor(this.props.spectrum.length / this.props.num);

    for (let i = 0; i < this.props.num; i++) {
      bars.push(
        <Bar frequency={this.props.spectrum[i * step]}/>
      );
    }

    return bars;
  }

  render() {
    return (
      <Entity layout={{type: 'circle', margin: 10}}
              position={this.props.position || '0 0 0'}>
        {this.renderBars()}
      </Entity>
    );
  }
}

export class Bar extends React.Component {
  static propTypes = {
    frequency: React.PropTypes.number
  };

  static defaultProps = {
    frequency: 0
  };

  render() {
    const yScale = this.props.frequency * 500 + 1;

    const translate = {
      x: 0,
      y: -1 * yScale / 2 - 1,
      z: 0,
    };
    const scale = {
      x: 1,
      y: yScale,
      z: 1
    };

    return (
      <Entity geometry={{primitive: 'box', translate: utils.coordinates.stringify(translate),
                         depth: 1, height: 1, width: 1}}
              material={{color: 'blue', shader: 'flat'}}
              scale={utils.coordinates.stringify(scale)}/>
    );
  }
}
