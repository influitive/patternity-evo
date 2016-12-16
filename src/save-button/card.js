import devboard from 'devboard';
import React from 'react';

const devcard = devboard.ns('save-button');

import SaveButton from './';

devcard(
  'Unsaved',
  <SaveButton saveStatus='unsaved'/>
);

devcard(
  'Saved',
  <SaveButton saveStatus='saved'/>
);

devcard(
  'Saving',
  <SaveButton saveStatus='saving'/>
);

devcard(
  'Error',
  <SaveButton saveStatus='error'/>
);