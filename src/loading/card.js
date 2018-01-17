/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Loading from './index.js';

const devcard = devboard.ns('loading');

devcard(
  'LOADING',
  <Loading size="large" type="dark" display="block" isModal={false} />
);
