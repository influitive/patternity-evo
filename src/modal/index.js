import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BsModal from 'react-bootstrap/lib/Modal';

import classes from './modal.css';

export default class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    class:         PropTypes.string,
    closeable:     PropTypes.bool,
    size:          PropTypes.oneOf(['small', 'large']),
    onClose:       PropTypes.func,
    keyboard:      PropTypes.bool,
    animate:       PropTypes.bool
  }

  static defaultProps = {
    class:         '',
    closeable:     true,
    size:          'large',
    onClose:       () => {},
    keyboard:      true,
    animate:       false
  }

  render() {
    return (
      <BsModal
        show={true}
        onHide={this.props.onClose}
        keyboard={this.props.keyboard}
        animation={this.props.animate}
        autoFocus={true}
        backdrop={this._backdrop()}
        bsSize={this.props.size}
        dialogClassName={this.props.class + ' ' + classes.__modal}>
        {this._renderChildren()}
      </BsModal>
    );
  }

  _backdrop() {
    return this.props.closeable ? true : 'static';
  }

  _renderChildren() {
    return React.Children.map(this.props.children,
      (child) => {
        if (child.type === Header) {
          return React.cloneElement(child, {
            closeable: this.props.closeable,
            onClose: this.props.onClose
          });
        }

        return child;
      }
    );
  }
}

export const Header = ({ children, closeable, onClose }) => {
  return (
    <BsModal.Header closeButton={closeable} onHide={onClose}>
      <BsModal.Title>{children}</BsModal.Title>
    </BsModal.Header>
  );
};

Header.propTypes = {
  closeable: PropTypes.bool,
  onClose: PropTypes.func
};

export const Body = ({ children }) => {
  return (
    <BsModal.Body>
      {children}
    </BsModal.Body>
  );
};

export const Footer = ({ children }) => {
  return (
    <BsModal.Footer>
      {children}
    </BsModal.Footer>
  );
};
