import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './styles.css';

export default class ToggleSwitch extends Component {
  static displayName = 'ToggleSwitch';

  static propTypes = {
    id:        PropTypes.string,
    enabled:   PropTypes.bool,
    isOn:      PropTypes.bool,
    onChange:  PropTypes.func,
    inputName: PropTypes.string
  }

  static defaultProps = {
    id:        '',
    enabled:   true,
    isOn:      false,
    onChange:  () => {},
    inputName: ''
  }

  state = { isOn: this.props.isOn }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOn: newProps.isOn
    });
  }

  checkbox = null;

  render() {
    return (
      <span id={this.props.id} className={this._switchCSSClasses()} onClick={this._clickCheckBox} >
        <span className={styles.toggleText}>{this._toggleText()}</span>
        <span className={styles.switch}>
          <span className={styles.switchLine}></span>
          <span className={styles.switchLine}></span>
          <span className={styles.switchLine}></span>
        </span>
        <input type="checkbox"
          ref={node => this.checkbox = node}
          className={styles.toggleCheckbox}
          checked={this._isChecked()}
          name={this.props.inputName}
          onChange={this._handleChange}
          id={this.props.id} />
      </span>
    );
  }

  _toggleText() {
    return this.state.isOn ? 'On' : 'Off';
  }

  _isChecked() {
    return this.state.isOn;
  }

  _switchCSSClasses() {
    return classNames(styles.toggleSwitch, {
      [styles.on]:            this.state.isOn,
      [styles.off]:           !this.state.isOn,
      [styles.disabled]:      !this.props.enabled
    });
  }

  _clickCheckBox = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.enabled) {
      ReactDOM.findDOMNode(this.checkbox).click();
    }
  }

  _handleChange = (event) => {
    this.setState({ isOn: !this.state.isOn });
    this.props.onChange(event);
  }
}