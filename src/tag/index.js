import React from 'react';
import { Icon } from 'infl-icons';
import styles from './styles.css';

export default ({ onRemove, tag, id }) =>
  <div className={styles.tag}>
    {tag}
    {onRemove &&
      <span className={styles.tagClose} onClick={() => onRemove(id || tag)}>
        <Icon icon='close' flex={true}/>
      </span>}
  </div>;
