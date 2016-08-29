import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

export default ({ size = 'medium', display = '', type = 'dark', isModal = false }) => (
  <span className={cn(
    styles.loadingSpinner,
    styles[size],
    styles[display],
    styles[type],
    { [styles.isModal]: isModal }
  )}></span>
);
