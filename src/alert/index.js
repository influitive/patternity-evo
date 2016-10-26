import React, { PropTypes, Component } from 'react';

import { Icon } from 'infl-icons';
import styles from './styles.css';
import cn from 'classnames';
import Action from './action';
import Detail from './detail';

const typeToIconMap = {
  success: 'check-circle-o',
  error:   'exclamation-circle-o',
  warning: 'info-circle-o'
};

class Alert extends Component {
  static propTypes = {
    title:     PropTypes.string,
    type:      PropTypes.oneOf(['success', 'error', 'info', 'warning']),
    showIcon:  PropTypes.bool,
    onClose:   PropTypes.func,
    action:    PropTypes.object
  };

  static defaultProps = {
    title:     '',
    type:      'info',
    showIcon:  false
  };

  icon = () => typeToIconMap[this.props.type] || 'alert-caution';

  classes = () =>
    cn(
      styles.alert,
      styles[this.props.type]
    );

  render = () => {
    const { onClose, title, children, showIcon, action } = this.props;

    return <div className={this.classes()}>
      {showIcon &&
        <span className={styles.icon}>
          <Icon icon={this.icon()}/>
        </span>
      }
      <div className={styles.content}>
        <div className={styles.titleAndBody}>
          {title &&
            <h4>
              {title}
            </h4>
          }
          <div className={styles.body}>
            {children}
          </div>
        </div>
        {action &&
          <Action onClick={action.onClick} title={action.title} />
        }
      </div>
      {onClose &&
        <span className={styles.close} onClick={onClose}>
          <Icon icon='close'/>
        </span>
      }
    </div>;
  };
}

Alert.Detail = Detail;

export default Alert;
