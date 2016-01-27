import React from 'react';
import styles from './panel.css';

import BsPanel from 'react-bootstrap/lib/Panel.js';


export default (props) => {
  return <BsPanel className={styles.panel} {...props}>{props.children}</BsPanel>;
};
