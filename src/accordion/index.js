import React from 'react';
import styles from './accordion.css';

import BsAccordion from 'react-bootstrap/lib/Accordion';

export default (props) => {
  return <BsAccordion className={styles.accordion} {...props}>{props.children}</BsAccordion>
}
