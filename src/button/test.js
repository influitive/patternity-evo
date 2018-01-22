/*eslint react/jsx-key: 0*/
import test from 'tape-catch';
import { shallow } from 'enzyme';
import React from 'react';
import cn from 'classnames';

import { Button } from './index.js';
import styles from './button.css';

test('button', t => {
  const wrapper = shallow(<Button disabled={true}>Hello</Button>);
  t.equal(wrapper.type(), 'button', 'should be a button');
  t.ok(wrapper.props().disabled, 'should be disabled');
  t.ok(wrapper.hasClass(cn(styles['disabled'])), 'should have the disabled styles');
  t.equal(wrapper.text(), 'Hello', 'should render text');

  const wrapper2 = shallow(<Button><span>Hello</span><div>Goodbye</div></Button>);
  const expectedChildren = [
    <span>Hello</span>,
    <div>Goodbye</div>
  ];

  t.deepEqual(wrapper2.props().children[1], expectedChildren, 'should render children');
  t.end();
});
