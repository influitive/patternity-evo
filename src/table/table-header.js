import React from 'react';
import classnames from 'classnames';
import styles from './table.css';

export default ({ className, ...props }) =>
  <div
    className={classnames('pt-table-header', styles.row, className)} {...props}>
  </div>;