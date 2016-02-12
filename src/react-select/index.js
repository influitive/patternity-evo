import React, { Component } from 'react';
import ComposedComponent from 'react-select';

import styles from './react-select.css';

class Select extends Component {
  render() {
    return <div className={styles.scope}>
      <ComposedComponent {...this.props}>
        {this.props.children}
      </ComposedComponent>
    </div>;
  }
}

export default Select;
