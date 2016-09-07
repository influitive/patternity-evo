import React, { Component, PropTypes } from 'react';

import Popover from '../popover';

import styles from './tooltip.css';

export default class Tooltip extends Component {

  static propTypes = {
    title:             PropTypes.string,
    element:           PropTypes.node.isRequired,
    position:          PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    onOpen:            PropTypes.func,
    // The prop should be a shape with a shape inside but React 0.14 doesn't support this.
    style: PropTypes.object
  }

  static defaultProps = {
    title:             '',
    position:          'top',
    onOpen:            () => {},

    style: {
      content: {
        minWidth: '300px',
        padding:  '13px 13px 26px 13px',
        fontSize: '13px'
      }
    }
  }

  state = {
    showTooltip: false
  }

  render() {
    return (
      <span className={styles.tooltip}>
        <Popover
          element={this._tooltipElement()}
          isOpen={this.state.showTooltip}
          position={this.props.position}
          onOpen={this.props.onOpen}
          style={{
            background:  'rgba(68, 68, 68, 0.9)',
            borderColor: ''
          }}>
          <div className={styles.tooltipContent} style={this.props.style.content}>
            {this.props.children}
          </div>
        </Popover>
      </span>
    );
  }

  tooltipElement = () => {
    return (
      <span className={styles.tooltipElement}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.closeTooltip}>
        {this.props.element}
      </span>
    );
  }

  handleMouseOver = () => {
    this.setState({
      showTooltip: true
    });
  }

  handleMouseOut = () => {
    this.setState({
      showTooltip: false
    });
  }
}
