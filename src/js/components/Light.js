import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  // Hack until named entities.
  const poppedProps = {};
  Object.keys(props).forEach(function (propName) {
    if (propName !== 'position') {
      poppedProps[propName] = props[propName];
    }
  });

  return (
    <Entity light={poppedProps} position={props.position || '0 0 0'}/>
  );
}
