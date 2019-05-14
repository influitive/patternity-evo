import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import classNames from 'classnames';
import { connectTheme } from 'gild';
import styles from './styles.css';
import nested from 'jss-nested';
import jss from 'jss';
jss.use(nested());

import mapping from './theme';
import addQa from '@influitive/qa-selector';

const ToggleSwitch = withHandlers({
  onClick: ({ onChange, value, enabled = true }) => e => {
    e.preventDefault();
    if (enabled) onChange(!value);
  },
  onToggle: ({ onChange }) => e => {
    onChange(e.target.checked);
  }
})(({
  value,
  trueLabel = 'On',
  falseLabel = 'Off',
  onClick,
  onToggle,
  className,
  enabled = true,
  inputProps = {},
  changeColor = true,
  theme,
  ...rest
}) => (
  <div className={classNames(styles.container, { [styles.disabled]: !enabled }, className)}>
    <div data-qa={addQa('toggle-control', rest)} className={classNames(styles.row)} onClick={onClick}>
      <div className={classNames(styles.falseOption, theme['option'], {
        [styles.active]: !value,
        [styles.off]: !value && changeColor
      })}>{falseLabel}</div>
      <div className={classNames(styles.trueOption, theme['option'], {
        [styles.active]: value,
        [styles.off]: !value && changeColor
      })}>
        {trueLabel}
      </div>
    </div>
    <label className={styles.srOnly}>
      {trueLabel}
      <input
        data-qa={addQa('toggle-value', rest)}
        type="checkbox"
        className={styles.input}
        checked={value}
        onChange={onToggle}
        disabled={!enabled}
        {...inputProps} />
    </label>
  </div>
));

ToggleSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  changeColor: PropTypes.bool,
  trueLabel: PropTypes.node,
  falseLabel: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  enabled: PropTypes.bool,
  inputProps: PropTypes.object,
  theme: PropTypes.object
};

export default connectTheme(mapping)(ToggleSwitch);
