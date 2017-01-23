import React from 'react';
import defaultImage from './missing.png';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

export default ({ src = defaultImage, inline = false }) => <img
  className={cx('avatar-image', { inline })}
  src={src}
/>;
