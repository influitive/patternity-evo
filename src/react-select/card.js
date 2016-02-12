import devcards from 'devcards';
import React, { Component } from 'react';

const devcard = devcards.ns('react-select');

import Select from './';

const options = [
  { value: 'bob', label: 'Bob Sagat' },
  { value: 'joey', label: 'Joey Mahone' },
  { value: 'liz', label: 'Liz Taylor' }
];

devcard(
  'React-Select',
  <Select name="example-select"
    options={options}
  />
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
  <Stateful />
);
