/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Checkbox from './index';
import { ThemeProvider } from 'gild';

const devcard = devboard.ns('Checkbox');

devcard(
  'Checkbox with label',
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
  'Checkbox checked no label',
  <Checkbox
    name='MyCheck'
    disabled={false}
    isChecked={true}
    indeterminate={false}
    onChange={(e) => { alert(`hit button with ${e.type}`); }}
  />
);

devcard(
  'Checkbox indeterminate required',
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
  'Checkbox required label disabled',
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
  'Checkbox with theme',
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
