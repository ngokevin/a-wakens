import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 5000}}
          material={{color: props.color || '#73CFF0', shader: 'flat', src: '#sky'}}
          scale="1 1 -1"/>
);
