import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.css';
import cn from 'classnames';

class PopoverContent extends Component {
  static propTypes = {
    position: PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right'
    ]),
    shouldHaveBorder: PropTypes.bool.isRequired,

    style: PropTypes.shape({
      background: PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired,
      borderRadius: PropTypes.number.isRequired,
      top: PropTypes.any,
      left: PropTypes.any
    }),
    hasShadow: PropTypes.bool
  }

  static defaultProps = {
    position: 'top',
    style: {
      borderColor: '#ccc',
      background: 'white',
      borderRadius: 0,
      top: null,
      left: null
    },
    className: '',
    hasShadow: false
  }

  render() {
    const { position } = this.props;

    return <div
      className={cn(styles.popover, styles[position])}
      style={this._popoverPositioningStyle()}>
      <div className={styles.content} style={this._contentStyle()}>
        {this.props.children}
      </div>
    </div>;

  }

  _popoverPositioningStyle() {
    return {
      left: this.props.style.left,
      top:  this.props.style.top
    };
  }

  _contentStyle() {
    const borderColor = this.props.shouldHaveBorder ? this.props.style.borderColor : 'transparent';

    return {
      border: `1px solid ${borderColor}`,
      borderRadius: `${this.props.style.borderRadius}px`,
      background:  this.props.style.background,
      boxShadow: this.props.hasShadow ? '5px 5px 15px rgba(136, 136, 136, 0.44)' : null
    };
  }
}

export default PopoverContent;
