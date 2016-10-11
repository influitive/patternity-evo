/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import { ThemeProvider } from 'gild';
import Tabs, { Tab } from './index.js';

const devcard = devboard.ns('tabs');

devcard(
  'Tabs',
  'Example of Tabs Component',
  ({ state }) =>
    <ThemeProvider theme={{
      themeColorPrimary: 'pink'
    }}>
      <Tabs activeKey={state.deref().activeKey} onSelect={key => state.swap(set('activeKey', key))}>
        <Tab eventKey={1} title='Title 1'/>
        <Tab eventKey={2} title='Title 2'/>
      </Tabs>
    </ThemeProvider>,
  {
    state: devboard.atom({
      activeKey: 1
    })
  }
);

const set = (key, val) => {
  return obj => Object.assign(
    {}, obj,
    { [key]: (typeof val === 'function') ? val(obj[key]) : val }
  );
};
