import React from 'react';
import BsButton from 'react-bootstrap/lib/Button';
import styles from './button.css';

console.log(styles);

class Button extends React.Component {
  render() {
    const cls = this.props.type === 'default' ? styles['btn-default'] : styles.btn;
    return <BsButton className={cls}>{this.props.children}</BsButton>;
  }
}

export default Button;

