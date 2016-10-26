import React from 'react';
import styles from './styles.css';

export default ({ title = '', action = '', children }) =>
  <div className={styles.detailed}>
    <h4>{title}</h4>
    <span className={styles.detailedAction}>{action}</span>
    <div className={styles.detailedBody}>
      {children}
    </div>
  </div>;