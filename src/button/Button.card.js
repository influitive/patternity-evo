import devcards from 'devcards';
import React, { Component } from 'react';
import Button from './index.js';

const devcard = devcards.ns('buttons');

devcard(
  'Buttons',
  `
  Patternity Buttons

  * primary
  * secondary
  * important
  * success
  * danger
  * text
  * default
  `,
  <div style={{textAlign: 'center'}}>
    <Button type="primary">Primary</Button>
    <Button type="Secondary">Secondary</Button>
    <Button type="important">Important</Button>
    <Button type="Success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="text">Text</Button>
    <Button>Default</Button>
  </div>
);

// Themed Button
import { createTheme } from '../themeable';
const colors = { themeColorPrimary: '#0000FF', themeColorSecondary: '#BADA55' };
const Theme = createTheme(colors);

class Context extends Component { render() { return <div style={{textAlign: 'center'}}>{this.props.children}</div>; } }
const Container = Theme(Context);

devcard(
  'Themed Button',
  `
  Theme Values:

  ${JSON.stringify(colors)}

  Themed Buttons
  `,
  <Container>
    <Button type="primary">Primary</Button>
    <Button type="Secondary">Secondary</Button>
    <Button type="important">Important</Button>
    <Button type="Success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="text">Text</Button>
    <Button>Default</Button>
  </Container>,
);

devcard(
  'Button with unusually long text',
  <div style={{textAlign: 'center'}}>
    <Button>How are you this fine day Bob? Wife treating you well?
    How are those little rascals of yours getting along?</Button>
  </div>
);
