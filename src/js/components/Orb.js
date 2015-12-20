import {Animation, Entity} from 'aframe-react';
import React from 'react';

import {LIGHTSABER_GREEN} from '../colors';

export default props => (
  <Entity>
    <Animation attribute="rotation" easing="linear" direction={props.direction || 'normal'}
               dur="10000" repeat="indefinite" to="0 360 0"/>
    <Entity geometry="primitive: sphere; radius: 0.2"
            material={`color: ${LIGHTSABER_GREEN}; shader: flat`}
            light={`color: ${LIGHTSABER_GREEN}; type: point; intensity: 2;`}
            position="15 0.5 0"/>
  </Entity>
);
