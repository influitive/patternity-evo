import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './button.css';

import { Icon } from 'infl-icons';
import { ThemeComponent } from '../themeable';
import mapping from './theme';

export class Button extends Component {
  static propTypes = {
    icon:      PropTypes.string,
    type:      PropTypes.oneOf(['primary', 'secondary', 'important', 'success', 'danger', 'text', 'default']),
    onClick:   PropTypes.func,
    disabled:  PropTypes.bool,
    inverse:   PropTypes.bool,
    isSubmit:  PropTypes.bool,
    style:     PropTypes.object,
    classList: PropTypes.string,
    sheet:     PropTypes.object
  };

  static defaultProps = {
    icon:      '',
    disabled:  false,
    inverse:   false,
    isSubmit:  false,
    classList: null,
    sheet: { classes: {} },
    type:  'default'
  };

  render() {
    const { disabled, onClick, children, isSubmit } = this.props;

    return <button type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      className={this._getClasses()}
      onClick={onClick}>
      { this._hasIcon() }
      {children}
    </button>;
  }

  _getClasses = () => {
    const { disabled, classList, type } = this.props;
    const { classes } = this.props.sheet;

    return classNames(
      styles[this._determineButtonClass()],
      {
        disabled:   disabled
      },
      classList,
      classes[type]
    );
  };

  _determineButtonClass = () => {
    const { disabled, inverse, type } = this.props;

    if(disabled) return 'disabled';

    if((type === 'secondary' || type === 'text') && inverse) {
      return type + 'Inverse';
    }

    return type;
  }

  _hasIcon = () => {
    if(this.props.icon === '') return null;

    return (
      <span className={styles.icon}>
        <Icon icon={this.props.icon} />
      </span>
    );
  }
}

export default ThemeComponent(Button, mapping);
