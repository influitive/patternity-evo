import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames';
import jss from 'jss';
import { omit } from 'ramda';
import nested from 'jss-nested';

import styles from './button.css';

import { Icon } from 'infl-icons';
import { connectTheme } from 'gild';

import mapping from './theme';
jss.use(nested());

const clean = omit([
  'icon',
  'type',
  'inverse',
  'style',
  'classList',
  'theme',
  'iconClass'
]);

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
    theme:     PropTypes.object,
    iconClass: PropTypes.string
  };

  static defaultProps = {
    icon:      '',
    disabled:  false,
    inverse:   false,
    isSubmit:  false,
    classList: null,
    theme: {},
    type:  'default',
    iconClass: ''
  };

  render() {
    const {
      disabled,
      onClick,
      children,
      isSubmit,
      ...rest
    } = this.props;

    return <button type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
      {...clean(rest)}
      className={this._getClasses()}>
      {this._hasIcon()}
      {children}
    </button>;
  }

  _getClasses = () => {
    const { classList, type, theme } = this.props;

    return cn(
      styles[this._determineButtonClass()],
      classList,
      theme[type]
    );
  };

  _determineButtonClass = () => {
    const { disabled, inverse, type } = this.props;

    if (disabled) return 'disabled';

    if ((type === 'secondary' || type === 'text') && inverse) {
      return type + 'Inverse';
    }

    return type;
  }

  _hasIcon = () => {
    if (this.props.icon === '') return null;

    return (
      <span className={cn(styles.icon, this.props.iconClass)}>
        <Icon icon={this.props.icon} />
      </span>
    );
  }
}

export default connectTheme(mapping)(Button);
