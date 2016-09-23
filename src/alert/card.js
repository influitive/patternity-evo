import devboard from 'devboard';
import React, { Component } from 'react';
import Alert from './index.js';

const devcard = devboard.ns('alerts');

devcard(
  'Alerts',
  `
  Patternity Alerts

  * success
  * error
  * info
  * warning
  `,
  <div style={{textAlign: 'center'}}>
    <Alert type='success' showAlert={true}>Success</Alert>
    <Alert type='error'>Error</Alert>
    <Alert type='info'>Info</Alert>
    <Alert type='warning'>Warning</Alert>
  </div>
);


devcard(
  'Alerts with close',
  ' ',
  <div style={{textAlign: 'center'}}>
    <Alert type='success' showAlert={true} closeable={true}>Closable</Alert>
  </div>
);


devcard(
  'Alerts with title and close',
  ' ',
  <div style={{textAlign: 'center'}}>
    <Alert type='success' showAlert={true} closeable={true} title='This is a title'>This is the body</Alert>
  </div>
);

