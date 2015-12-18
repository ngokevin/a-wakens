import {Entity} from 'aframe-react';
import React from 'react';

export default class Camera extends React.Component {
  render() {
    return (
      <Entity position={this.props.position || '0 0 0'}>
        <Entity camera look-controls wasd-controls/>
      </Entity>
    );
  }
}
