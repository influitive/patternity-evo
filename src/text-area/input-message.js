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
  message: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
    React.PropTypes.array
  ])
};

export default InputMessage;
