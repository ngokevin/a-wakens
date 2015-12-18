import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'cylinder', height: 0.2, radius: 50}}
          material={{color: props.color || '#121417', roughness: 0.8,
                     repeat: '20 20', src: '#ground'}}
          position="0 -0.5 0"/>
);
