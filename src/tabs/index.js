import React from 'react';
import cn from 'classnames';
import BsTabs from 'react-bootstrap/lib/Tabs';
import BsTab from 'react-bootstrap/lib/Tab';
import styles from './styles.css';
import jss from 'jss';
import nested from 'jss-nested';
import { connectTheme } from 'gild';

import mapping from './theme';
jss.use(nested());

export default connectTheme(mapping)(({ activeKey, onSelect, children, theme = {} }) =>
  <div className={cn(styles.tabs, theme.default)}>
    <BsTabs activeKey={activeKey} animation={false} onSelect={onSelect}>
      {children}
    </BsTabs>
  </div>
);

export const Tab = BsTab;