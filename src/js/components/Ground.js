import {Entity} from 'aframe-react';
import React from 'react';


export default class Ground extends React.Component {
  static propTypes = {
    color: React.PropTypes.string
  };

  render() {
    return (
      <Entity geometry={{primitive: 'cylinder', height: 0.2, radius: 12}}
              material={{color: this.props.color || '#BABABA', metalness: 0.2,
                         repeat: '50 20', roughness: 0.1}}/>
    );
  }
}
