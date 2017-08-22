import devboard from 'devboard';
import React, { Component } from 'react';
import { ThemeProvider } from 'gild';
import Button from './index.js';

const devcard = devboard.ns('buttons');


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
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
    <Button type="primary" icon="speech">Primary</Button>
    <Button type="secondary" disabled={true}>Secondary</Button>
    <Button type="important">Important</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="text">Text</Button>
    <Button>Default</Button>
  </div>
);

// Themed Button
class Container extends Component {
  render() { return <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
    {this.props.children}
  </div>; }
}

devcard(
  'Themed Button',
  `
  Themed Buttons
  `,
  <ThemeProvider theme={{
    themeColorPrimary: 'pink'
  }}>
    <Container>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="important">Important</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="text" inverse={true}>Text</Button>
      <Button>Default</Button>
    </Container>
  </ThemeProvider>,
);

devcard(
  'Button with unusually long text',
  <div style={{ textAlign: 'center' }}>
    <Button>How are you this fine day Bob? Wife treating you well?
    How are those little rascals of yours getting along?</Button>
  </div>
);
