import {Entity} from 'aframe-react';
import React from 'react';

import {LIGHTSABER_BLUE} from '../colors';

export default props => {
  const geometry = {
    segmentsTheta: 50,
    primitive: 'ring',
    radiusInner: 0.01,
    radiusOuter: 0.016
  };
  const material = {
    color: 'LIGHTSABER_BLUE',
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity cursor={props} geometry={geometry} material={material}
            position="0 0 -1"/>
  );
}
