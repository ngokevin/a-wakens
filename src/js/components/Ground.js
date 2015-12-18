import {Entity} from 'aframe-react';
import React from 'react';


export default class Ground extends React.Component {
  static propTypes = {
    color: React.PropTypes.string
  };

  render() {
    return (
      <Entity geometry={{primitive: 'cylinder', height: 0.2, radius: 50}}
              material={{color: this.props.color || '#121417', roughness: 0.8,
                         repeat: '20 20', src: '#ground'}}
              position="0 -0.5 0"/>
    );
  }
}
