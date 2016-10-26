import React from 'react';
import styles from './styles.css';
import Button from '../button';

export default ({ onClick, title }) =>
  <div className={styles.action}>
    <Button type="secondary" onClick={onClick}>
      {title}
    </Button>
  </div>;