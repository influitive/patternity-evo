/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Checkbox from './index';
import { ThemeProvider } from 'gild';

const devcard = devboard.ns('Checkbox');

devcard(
  'unchecked',
  <Checkbox
    name='MyCheck'
    label='on/off'
    disabled={false}
    isChecked={false}
    indeterminate={false}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'checked',
  <Checkbox
    name='MyCheck'
    disabled={false}
    isChecked={true}
    indeterminate={false}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'indeterminate',
  <Checkbox
    name='MyCheck'
    disabled={false}
    isChecked={false}
    indeterminate={true}
    required={true}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'indeterminate and disabled',
  <Checkbox
    name='MyCheck'
    disabled={true}
    isChecked={false}
    indeterminate={true}
    required={true}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'unchecked and disabled',
  <Checkbox
    name='MyCheck'
    disabled={true}
    isChecked={false}
    indeterminate={false}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'checked and disabled',
  <Checkbox
    name='MyCheck'
    label='is a checkbox?'
    disabled={true}
    isChecked={true}
    indeterminate={false}
    required={true}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'themed',
  <ThemeProvider  theme={{ borderRadius: '20px' }}>
    <Checkbox
      name='MyCheck'
      label='is a checkbox?'
      disabled={false}
      isChecked={true}
      indeterminate={false}
      required={true}
      onChange={(e) => { alert(`hit button with ${e.type}`); }}
    />
  </ThemeProvider>,
);
