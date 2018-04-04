import devboard from 'devboard';
import React from 'react';
import ToggleSwitch from './index.js';
import { ThemeProvider } from 'gild';
import { Icon } from 'infl-icons';

const devcard = devboard.ns('toggleswitch');

devcard(
  'Toggle Switch',
  `
  Patternity Toggle Switch

  * default labels, active false
  * custom labels, active true
  * no changeColor on toggle, custom labels
  * default labels, active true, disabled
  * custom non-string labels, active true
  `,
  ({ state, setState }) => (
    <ThemeProvider theme={{ themeColorPrimary: 'blue' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '5px' }}>
          <ToggleSwitch
            value={state.toggle1}
            onChange={() => setState({ toggle1: !state.toggle1 })}/>
        </div>
        <div style={{ margin: '5px' }}>
          <ToggleSwitch
            value={state.toggle2}
            trueLabel="Yes, sign me up!"
            falseLabel="No"
            onChange={() => setState({ toggle2: !state.toggle2 })}/>
        </div>
        <div style={{ margin: '5px' }}>
          <ToggleSwitch
            value={state.toggle3}
            changeColor={false}
            trueLabel="all"
            falseLabel="any"
            onChange={() => setState({ toggle3: !state.toggle3 })}/>
        </div>
        <div style={{ margin: '5px' }}>
          <ToggleSwitch
            enabled={false}
            value={state.toggle4}
            onChange={() => setState({ toggle4: !state.toggle4 })}/>
        </div>
        <div style={{ margin: '5px' }}>
          <ToggleSwitch
            value={state.toggle5}
            trueLabel={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon="public" />
                &nbsp;review
              </div>
            }
            falseLabel={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon icon="pencil" />
                &nbsp;edit
              </div>
            }
            onChange={() => setState({ toggle5: !state.toggle5 })}/>
        </div>
      </div>
    </ThemeProvider>
  ),
  {
    state: {
      toggle1: false,
      toggle2: true,
      toggle3: false,
      toggle4: true,
      toggle5: true
    }
  }
);
