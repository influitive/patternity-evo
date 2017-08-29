import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'infl-icons';
import styles from '../shared/form-styles.css';

const InputIcon = ({
  type = 'text',
  required = false
}) => {
  if (type === 'search') {
    return <span className={styles.searchInput}>
      <Icon icon='search' />
    </span>;
  }

  if (required) {
    return <span className={styles.requiredInput}>
      <Icon icon='asterisk' />
    </span>;
  }

  return <span></span>;
};

InputIcon.propTypes = {
  type:     PropTypes.oneOf(['text', 'password', 'url', 'email', 'search', 'number', '']),
  required: PropTypes.bool
};

export default InputIcon;
