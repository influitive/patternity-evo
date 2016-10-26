import React from 'react';
import classnames from 'classnames';

export default ({ className, ...props }) =>
  <div className={classnames('pt-table-cell', className)} {...props}>
  </div>;
