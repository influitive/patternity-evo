import devboard from 'devboard';
import React from 'react';
import Pager from './index.js';
import { ThemeProvider } from 'gild';

const devcard = devboard.ns('pager');

devcard(
  'Basic Pager',
  '',
  <Pager currentPage={1}
    perPage={10}
    totalItemCount={100}
    onPageChangeCallback={()=>{}}/>
);


devcard(
  'Themed Pager',
  `
  Themed Pager
  `,
  ({ state }) =>
    <ThemeProvider theme={{
      themeColorPrimary: 'pink'
    }}>
      <Pager currentPage={state.deref().currentPage}
        perPage={10}
        totalItemCount={100}
        onPageChangeCallback={newPage => state.swap(set('currentPage', newPage))}/>
    </ThemeProvider>,
  {
    state: devboard.atom({
      currentPage: 1
    })
  }
);

const set = (key, val) => {
  return obj => Object.assign(
    {}, obj,
    { [key]: (typeof val === 'function') ? val(obj[key]) : val }
  );
};