import devboard from 'devboard';
import React, { Component } from 'react';

const devcard = devboard.ns('react-select');

import Select from './';

const options = [
  { value: 'bob', label: 'Bob Sagat' },
  { value: 'joey', label: 'Joey Mahone' },
  { value: 'liz', label: 'Liz Taylor' }
];

devcard(
  'React-Select',
  <div style={{height: '200px' }}>
    <Select name="example-select" options={options} />
  </div>
);


class Stateful extends Component {
  state = {
    value: []
  };

  handleChange = value => {
    console.log('VALUE: ' + value);
    this.setState({ value });
  };

  render() {
    return <Select name="example-select"
      multi={true}
      value={this.state.value}
      options={options}
      onChange={this.handleChange} />;
  }
}

devcard(
  'React-Select: Multi',
  `This is a multi-select`,
  <div style={{height: '200px' }}>
    <Stateful />
  </div>
);
