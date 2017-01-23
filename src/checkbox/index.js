import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { Icon } from 'infl-icons';
import { connectTheme } from 'gild';

import mapPropsToCss from './theme';

const cx = classNames.bind(styles);
const checkIcon = 'check';
const indeterminateIcon = 'minus';
const requiredIcon = 'asterisk';


// TODO: change to stateless component when gild is updated
class Checkbox extends React.Component {
  render() {
    const { disabled, onChange, indeterminate, isChecked, label, required, theme } = this.props;

    return (
      <div
        onClick={disabled ? null : onChange}
        className={cx('checkbox')}>

        <span className={cx(
          'stylized-checkbox',
          checkboxCss(disabled, indeterminate, isChecked),
          theme ? theme.checkBox : null
        )}>
          <Icon icon={
            iconCss(indeterminate, isChecked)
          } />
        </span>

        {checkboxLabel(label, required)}

      </div>
    );
  }
}

const checkboxCss = (disabled, indeterminate, isChecked) => {
  if (disabled) return { disabled };
  return indeterminate ? { indeterminate } : { isChecked };
};

const iconCss = (indeterminate, isChecked) => {
  if (indeterminate) return indeterminateIcon;
  return isChecked ? checkIcon : '';
};

const checkboxLabel = (label, required) => {
  if (!label && !required) return null;
  return (
    <label
      className={cx('checkbox-label')}>
      {label}
      {requiredDiv(required)}
    </label>
  );
};

const requiredDiv = (required) => {
  if (required) {
    return (
      <span className={cx('required-icon')}>
        <Icon icon={requiredIcon} />
      </span>
    );
  }
};


export default connectTheme(mapPropsToCss)(Checkbox);
