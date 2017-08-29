import PropTypes from 'prop-types';
import React from 'react';
import styles from '../shared/form-styles.css';

const InputMessage = ({
  message = null
}) => {
  if (message === null) return <span></span>;
  const messages = Array.isArray(message) ? message : [message];

  return <div>
    {messages.map((message, i) =>
      <div key={i} className={styles.inputMessage}>
        {message}
      </div>
    )}
  </div>;
};

InputMessage.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array
  ])
};

export default InputMessage;
