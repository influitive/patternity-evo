import devboard from 'devboard';
import React from 'react';
import ToggleSwitch from './index.js';

const devcard = devboard.ns('toggleswitch');

devcard(
  'Toggle Switch',
  `
  Patternity Toggle Switch
  `,
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ToggleSwitch id='1' enabled={true} isOn={true}/>
    <ToggleSwitch id='2' enabled={true} isOn={false}/>
    <ToggleSwitch id='2' enabled={false} isOn={true}/>
  </div>
);