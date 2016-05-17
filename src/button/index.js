import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import jss from 'jss';
import nested from 'jss-nested';

import styles from './button.css';

import { Icon } from 'infl-icons';
import { connectTheme } from 'gild';

import mapping from './theme';
jss.use(nested());

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
    theme:     PropTypes.object
  };

  static defaultProps = {
    icon:      '',
    disabled:  false,
    inverse:   false,
    isSubmit:  false,
    classList: null,
    theme: {},
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
    const { disabled, classList, type, theme } = this.props;

    return classNames(
      styles[this._determineButtonClass()],
      {
        disabled:   disabled
      },
      classList,
      theme[type]
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

export default connectTheme(mapping)(Button);
