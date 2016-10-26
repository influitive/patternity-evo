import devboard from 'devboard';
import React from 'react';

import storage from './storage';

const devcard = devboard.ns('storage');

devcard(
  'Basic storage example',
  'Click the incrememnt count. Refresh and the value remains.',
  ({ state }) =>
    <div>
      StoredValue: {state.deref().value}
      <button onClick={onClick(state)}>
        Click Me to increment
      </button>
    </div>,
  {
    state: devboard.atom({
      value: storage.get('storedValue') || 0
    })
  }
);

const onClick = state => () => {
  const newValue = state.deref().value + 1;
  state.swap(set('value', newValue));
  storage.set('storedValue', newValue);
};

const set = (key, val) => {
  return obj => Object.assign(
    {}, obj,
    { [key]: (typeof val === 'function') ? val(obj[key]) : val }
  );
};