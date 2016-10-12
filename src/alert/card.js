/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Alert from './index.js';

const devcard = devboard.ns('alert');

devcard(
  'Basic Alert (default)',
  '',
  <Alert>
    Nothing special
  </Alert>
);

devcard(
  'Basic Closable Alert (warning)',
  '',
  <Alert type='warning' closeable={true} onClose={()=>console.log('yo')}>
    Nothing special
  </Alert>
);

devcard(
  'Basic Closable Alert with Title',
  '',
  <Alert type='error' title='Your title here' onClose={()=>console.log('yo')}>
    Nothing special
  </Alert>
);

devcard(
  'Alert with Icon',
  '',
  <Alert type='error' showIcon={true} title='Your title here' onClose={()=>console.log('yo')}>
    Nothing special
  </Alert>
);


devcard(
  'Alert with Action',
  '',
  <Alert type='error' showIcon={true} title='Your title here' action={{ action: ()=>{}, title: 'Action!' }}>
    Nothing special
  </Alert>
);

devcard(
  'Alert with Action and close',
  '',
  <Alert type='error' showIcon={true} title='Your title here' onClose={()=>console.log('yo')} action={{ action: ()=>{}, title: 'Action!' }}>
    Nothing special
  </Alert>
);

devcard(
  'Alert with Details',
  '',
  <Alert type='error' showIcon={true} title='Your title here' onClose={()=>console.log('yo')}>
    <Alert.Detail title='Subtile!' action={
      <div>Somethin</div>
    }/>
  </Alert>
);

