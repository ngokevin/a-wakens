import {Entity} from 'aframe-react';
import React from 'react';

export default class BarVisualization extends React.Component {
  static propTypes: {
    num: React.PropTypes.number,
    radius: React.PropTypes.number,
    spectrum: React.PropTypes.array
  };

  renderBars() {
    let bars = [];
    const step = this.props.spectrum / (this.props.numBars || 512);

    for (let i = 0; i < this.props.numBars; i++) {
      bars.push(this.getBar(this.props.spectrum[i * step]));
    }

    return bars;
  }

  getBar(frequency) {
    const scale = frequency * 500 + 1;

    return (
      <Entity geometry={{primitive: 'box'}}
              material={{color: 'red'}}
              pivot={{x: 0, y: scale / 2 - 1, z: 0}}
              scale={{x: 1, y: scale, z: 1}}/>
    );
  }

  render() {
    return (
      <Entity layout={{type: 'circle', radius: this.props.radius || 20}}>
        {this.renderBars()}
      </Entity>
    );
  }
}
