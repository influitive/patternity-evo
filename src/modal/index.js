import PropTypes from 'prop-types';
import React from 'react';
import { compose, setPropTypes, setDisplayName } from 'recompose';

import BsModal from 'react-bootstrap/lib/Modal';

import styles from './modal.css';

export default compose(
  setPropTypes({
    className: PropTypes.string,
    closeable: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', 'default']),
    onClose: PropTypes.func,
    keyboard: PropTypes.bool,
    animate: PropTypes.bool
  }),
  setDisplayName('Modal')
)(({
  className = '',
  closeable = true,
  size = 'large',
  onClose = () => {},
  keyboard = true,
  animate = false,
  children
}) => (
  <BsModal
    show={true}
    onHide={onClose}
    keyboard={keyboard}
    animation={animate}
    autoFocus={true}
    backdrop={closeable ? true : 'static'}
    bsSize={size === 'default' ? undefined : size}
    dialogClassName={className + ' ' + styles.__modal}>
    {React.Children.map(children, child => child.type === Header
      ? React.cloneElement(child, { closeable, onClose }) : child
    )}
  </BsModal>
));

export const Header = compose(
  setPropTypes({
    closeable: PropTypes.bool,
    onClose: PropTypes.func
  }),
  setDisplayName('ModalHeader')
)(({ children, closeable, onClose }) => (
  <BsModal.Header closeButton={closeable} onHide={onClose}>
    <BsModal.Title>{children}</BsModal.Title>
  </BsModal.Header>
));

export const Body = setDisplayName('ModalBody')(
  ({ children }) => <BsModal.Body>{children}</BsModal.Body>
);
export const Footer = setDisplayName('ModalFooter')(
  ({ children }) => <BsModal.Footer>{children}</BsModal.Footer>
);
