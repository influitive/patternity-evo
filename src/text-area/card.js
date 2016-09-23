import devboard from 'devboard';
import React from 'react';
import TextArea from './index.js';

const devcard = devboard.ns('textarea');

devcard(
  'TextArea',
  `
  Patternity TextArea
  `,
  <div>
    <TextArea placeholder='Content goes here!' name='1' onChange={()=>{}}/>
    <TextArea placeholder='This is read only' name='1' onChange={()=>{}} readOnly={true}/>
  </div>
);

devcard(
  'TextArea with messages',
  '',
  <div>
    <TextArea message='Message 1' name='1' onChange={()=>{}} placeholder='This is read only' />
    <TextArea message={['Message 1', 'Message 2']} name='1' onChange={()=>{}} placeholder='This is read only' />
  </div>
);

devcard(
  'TextArea with required',
  '',
  <div>
    <TextArea message='Message 1' required={true} name='1' onChange={()=>{}} placeholder='Mandatory' />
  </div>
);


