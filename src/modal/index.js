import PropTypes from 'prop-types';
import React from 'react';
import { compose, setPropTypes, defaultProps, setDisplayName } from 'recompose';

import BsModal from 'react-bootstrap/lib/Modal';

import styles from './modal.css';

const withModalProps = child => React.cloneElement(child, {
  closeable: this.props.closeable,
  onClose: this.props.onClose
});

const Children = ({ children }) => React.Children.map(
  children,
  child => child.type === Header ? withModalProps(child) : child
);

export default (props) => compose(
  defaultProps({
    className: '',
    closeable: true,
    size: 'large',
    onClose: () => {},
    keyboard: true,
    animate: false
  }),
  setDisplayName('Modal'),
  setPropTypes({
    className: PropTypes.string,
    closeable: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    onClose: PropTypes.func,
    keyboard: PropTypes.bool,
    animate: PropTypes.bool
  })
)((
  <BsModal
    show={true}
    onHide={props.onClose}
    keyboard={props.keyboard}
    animation={props.animate}
    autoFocus={true}
    backdrop={props.closeable ? true : 'static'}
    bsSize={props.size}
    dialogClassName={props.className + ' ' + styles.__modal}>
    <Children>{props.children}</Children>
  </BsModal>
));

export const Header = setPropTypes({
  closeable: PropTypes.bool,
  onClose: PropTypes.func
})(({ children, closeable, onClose }) => (
  <BsModal.Header closeButton={closeable} onHide={onClose}>
    <BsModal.Title>{children}</BsModal.Title>
  </BsModal.Header>
));

export const Body = ({ children }) => <BsModal.Body>{children}</BsModal.Body>;
export const Footer = ({ children }) => <BsModal.Footer>{children}</BsModal.Footer>;
