import {Entity} from 'aframe-react';
import React from 'react';

export default class Camera extends React.Component {
  render() {
    return (
      <Entity position="0 1.8 0">
        <Entity camera look-controls wasd-controls/>
      </Entity>
    );
  }
}
