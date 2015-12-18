import {Entity} from 'aframe-react';
import React from 'react';


export default class Sky extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    radius: React.PropTypes.number
  };

  render() {
    return (
      <Entity geometry={{primitive: 'sphere', radius: 5000}}
              material={{color: this.props.color || '#73CFF0', shader: 'flat', src: '#sky'}}
              scale="1 1 -1"/>
    );
  }
}
