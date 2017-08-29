import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TetherComponent from 'react-tether';
import PopoverContent from './popover-content';
import PopoverArrow from './popover-arrow';
import styles from './styles.css';

class Popover extends Component {
  static propTypes = {
    isOpen:            PropTypes.bool.isRequired,
    position:          PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    element:           PropTypes.any.isRequired,
    onOpen:            PropTypes.func,
    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor(props) {
        let borderColor = props.borderColor || '';
        if (borderColor.length > 0 && /rgba/.test(props.background)) {
          return new Error('Cannot use border with transparent background');
        }
      }
    }),
    hasShadow: PropTypes.bool,
    onClickOut: PropTypes.func,
    renderElementTo: PropTypes.string
  }

  static defaultProps = {
    isOpen:            false,
    position:          'top',
    onOpen() {},
    style: {
      borderColor: '#ccc',
      background:  '#fff'
    },
    hasShadow:          false,
    onClickOut:         null,
    renderElementTo:    null
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && prevProps.isOpen !== this.props.isOpen) this.props.onOpen();
  }

  render() {
    if (!this.props.isOpen) {
      return this.props.element;
    }

    return <span className={styles.main}>
      {this.getTetherElement()}
      {this.getArrowElement()}
    </span>;
  }

  getElement = () => {
    return <span>
      {this.getBackDropElement()}
      {this.props.element}
    </span>;
  }

  getPopoverElement = () => {
    if (!this.props.isOpen) return null;
    return this.getPopoverContent();
  }

  getArrowElement = () => {
    if (!this.props.isOpen) return null;

    return <PopoverArrow
      position={this.props.position}
      shouldHaveBorder={this.shouldHaveBorder()}
      style={this.getStyle()}/>;
  }

  getStyle = () => {
    return {
      borderColor: '#ccc',
      background:  '#fff',
      ...this.props.style
    };
  }

  getBackDropElement = () => {
    if (!this.props.onClickOut || !this.props.isOpen) return null;

    return <div className={styles.backdrop}
      onClick={this.handleBackDropClick}>
    </div>;
  }

  getTetherElement = () => {
    const tetherOptions = this.getTetherOptions();
    return <TetherComponent {...tetherOptions}>
      {this.getElement()}
      {this.getPopoverElement()}
    </TetherComponent>;
  }

  attachments = {
    top: {
      attachment: 'bottom center',
      targetAttachment: 'top center'
    },
    bottom: {
      attachment: 'top center',
      targetAttachment: 'bottom center'
    },
    left: {
      attachment: 'middle right',
      targetAttachment: 'middle left'
    },
    right: {
      attachment: 'middle left',
      targetAttachment: 'middle right'
    }
  };

  getTetherOptions = () => {
    return {
      ...this.attachments[this.props.position],
      constraints: [
        {
          to: 'window',
          pin: ['left','right']
        }
      ],
      renderElementTo: this.props.renderElementTo
    };
  }

  getPopoverContent = () => {
    const { position, hasShadow, children } = this.props;

    return <PopoverContent
      position={position}
      shouldHaveBorder={this.shouldHaveBorder()}
      style={this.getStyle()}
      hasShadow={hasShadow}>
      {children}
    </PopoverContent>;
  }

  shouldHaveBorder = () => {
    const borderColor = this.props.style.borderColor || '';
    return borderColor.length > 0 && !/rgba/.test(this.props.style.background);
  }

  handleBackDropClick = (event) => {
    this.props.onClickOut(event);
  }
}

export default Popover;
