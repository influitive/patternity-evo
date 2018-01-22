/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';

import Modal, { Header, Body, Footer } from './index.js';
import { Button } from '../button';

const devcard = devboard.ns('modal');

devcard(
  'Modal',
  'Example of Modal Dialog Component',
  ({ state }) => {
    return (
      <div>
        {modal(state)}
        <Button onClick={() => state.swap(set('isOpen', true))}>Show Modal</Button>
      </div>
    );
  },
  {
    state: devboard.atom({
      isOpen: false
    })
  }
);

const modal = (state) => {
  if (!state.deref().isOpen) return null;

  return (
    <Modal onClose={() => state.swap(set('isOpen', false))} animate={true}>
      <Header>My Modal</Header>
      <Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Body>
      <Footer>
        <Button onClick={() => state.swap(set('isOpen', false))}>Cancel</Button>
        <span style={{ 'paddingLeft': '10px' }}>
          <Button onClick={() => state.swap(set('isOpen', false))} type="success">Ok</Button>
        </span>
      </Footer>
    </Modal>
  );
};

const set = (key, val) => {
  return obj => Object.assign(
    {}, obj,
    { [key]: (typeof val === 'function') ? val(obj[key]) : val }
  );
};
