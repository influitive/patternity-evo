import devboard from 'devboard';
import React from 'react';
import Popover from './index.js';

const devcard = devboard.ns('popovers');

devcard(
  'Test Render Element To',
  <div id="test-target-element"></div>
);

devcard(
  'Basic Open',
  <div style={{ textAlign: 'center', position: 'fixed', top: '200px', left: '200px' }}>
    <Popover
      element={<a>Open Popover Demo</a>}
      isOpen={true}
      renderElementTo="#test-target-element">
      <div style={{ padding: '50px' }}>
        <a href="javascript://">Edit</a>
        <a href="javascript://">Lock</a>
        <a href="javascript://">Move</a>
        <a href="javascript://">Delete</a>
      </div>
    </Popover>
  </div>
);

devcard(
  'Different positions',
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Popover element={<a>Left</a>} position='left' isOpen={true}>
      Hola
    </Popover>
    <Popover element={<a>Top</a>} position='top' isOpen={true}>
      Hola
    </Popover>
    <Popover element={<a>Bottom</a>} position='bottom' isOpen={true}>
      Hola
    </Popover>
    <Popover element={<a>Right</a>} position='right' isOpen={true}>
      Hola
    </Popover>
  </div>
);

devcard(
  'Shadows',
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Popover element={<a>Hola</a>} position='bottom' isOpen={true} hasShadow={true}>
      This should have some shadow.
    </Popover>
  </div>
);

devcard(
  'Background Color',
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Popover element={<a>Hola</a>} position='bottom' isOpen={true} style={{ background: 'red' }}>
      This should have some shadow.
    </Popover>
  </div>
);

const onClick = () => console.log('Clicked out of popover!');

devcard(
  'On click out!',
  'Catch when the user clicks outside the Popover. See console for proof!',
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Popover element={<a>Hola</a>}
      position='bottom'
      isOpen={true}
      onClickOut={onClick}>
      This should have some shadow.
    </Popover>
  </div>
);

devcard(
  'Border',
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Popover element={<a>Hola</a>}
      position='bottom'
      isOpen={true}
      style={{ borderColor: 'blue', background: 'yellow' }}>
      This should have blue border.
    </Popover>
  </div>
);

devcard(
  'Border radius',
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Popover element={<a>Hola</a>}
      position='bottom'
      isOpen={true}
      style={{ borderColor: 'red', background: 'yellow', borderRadius: 3 }}>
      This should have rounded border.
    </Popover>
  </div>
);
