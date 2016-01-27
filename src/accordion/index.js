import React from 'react';
import styles from './accordion.css';

console.log(styles);

import BsAccordion from 'react-bootstrap/lib/Accordion';

const Accordion = (props) => {
  return <BsAccordion className={styles.accordion} {...props}>{props.children}</BsAccordion>
}

export default Accordion;
