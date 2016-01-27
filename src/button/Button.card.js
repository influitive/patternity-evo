import devcards from 'devcards';
import React from 'react';
import Button from './index.js';

const devcard = devcards.ns('buttons');

devcard(
  'Buttons',
  `
  A simple display of bootstrap buttons.

  * default
  * primary
  * success
  * info
  * warning
  * danger
  * link
  `,
  <div style={{textAlign: 'center'}}>
    buttons go here
  </div>
);

devcard(
  'Success Button',
  `
  * success
  `,
  <div style={{textAlign: 'center'}}>
    <Button type="success">success</Button>
  </div>
);
