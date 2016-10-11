import React from 'react';
import classnames from 'classnames';
import styles from './table.css';

export default ({ style, className, ...props }) =>
  <div
    className={classnames('pt-table-row', styles.row, className)} {...props}
    style={style}>
  </div>;