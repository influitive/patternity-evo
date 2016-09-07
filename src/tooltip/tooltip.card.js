/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';

import Tooltip from './index.js';

const devcard = devboard.ns('Tooltip');

const el = <div>Content</div>;
devcard(
  'Tooltip Top',
  '',
  () => {
    return (
      <div>
        <Tooltip position='top' element={el}>Show Tooltip</Tooltip>
      </div>
    );
  }
);

devcard(
  'Tooltip bottom',
  '',
  () => {
    return (
      <div>
        <Tooltip position='bottom' element={el}>Show Tooltip</Tooltip>
      </div>
    );
  }
);

devcard(
  'Tooltip left',
  '',
  () => {
    return (
      <div>
        <Tooltip position='left' element={el}>Show Tooltip</Tooltip>
      </div>
    );
  }
);

devcard(
  'Tooltip right',
  '',
  () => {
    return (
      <div>
        <Tooltip position='right' element={el}>Show Tooltip</Tooltip>
      </div>
    );
  }
);
