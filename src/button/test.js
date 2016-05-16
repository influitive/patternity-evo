/*eslint react/jsx-key: 0*/
import test from 'tape-catch';
import { shallow } from 'enzyme';
import React from 'react';

import { Button } from './index.js';

test('button', t => {
  const wrapper = shallow(<Button disabled={true}>Hello</Button>);
  t.equal(wrapper.type(), 'button', 'should be a button');
  t.ok(wrapper.props().disabled, 'should be disabled');
  t.ok(wrapper.hasClass('disabled'), 'should have disabled class');
  t.equal(wrapper.text(), 'Hello', 'should render text');

  const wrapper2 = shallow(<Button><span>Hello</span><div>Goodbye</div></Button>);
  const expectedChildren = [
    <span>Hello</span>,
    <div>Goodbye</div>
  ];

  t.deepEqual(wrapper2.props().children[1], expectedChildren, 'should render children');
  t.end();
});
