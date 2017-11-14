import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { Icon } from 'infl-icons';
import { connectTheme } from 'gild';

import mapPropsToCss from './theme';

const cx = classNames.bind(styles);
const checkIcon = 'check';
const indeterminateIcon = 'minus';

// TODO: change to stateless component when gild is updated
class Checkbox extends React.Component {
  render() {
    const { disabled, onChange, indeterminate, isChecked, theme } = this.props;

    return (
      <div
        onClick={disabled ? null : onChange}
        className={cx('checkbox')}>

        <span className={cx(
          'stylized-checkbox',
          { disabled, isChecked },
          theme ? theme.checkbox : null
        )} >
          <Icon icon={
            iconCss(indeterminate, isChecked)
          } />
        </span>
      </div>
    );
  }
}

const iconCss = (indeterminate, isChecked) => {
  if (indeterminate) return indeterminateIcon;
  return isChecked ? checkIcon : '';
};

export default connectTheme(mapPropsToCss)(Checkbox);
