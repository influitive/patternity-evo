import React from 'react';

import styles from './styles.css';

const modelCheck = (isModal) => isModal ? 'isModal' : '';

const Loading = ({ size = 'medium', display = '', type = 'dark', isModal = false }) => (
  <span className={`${styles.loadingSpinner}
    ${styles[size]}
    ${styles[display]}
    ${styles[type]}
    ${styles[modelCheck(isModal)]}`}></span>
);

export default Loading;
