import React, { Component } from 'react';
import ComposedComponent from 'react-select';
import { Icon } from 'infl-icons';
import styles from './react-select.css';

class Select extends Component {
  render() {
    return <div className={styles.scope}>
      <div className={styles.input}>
        <ComposedComponent {...this.props}>
          {this.props.children}
        </ComposedComponent>
      </div>
      <div className={styles.arrow}>
        <Icon icon='chevron-down'/>
      </div>
    </div>;
  }
}

export default Select;
