import React, { PropTypes, Component } from 'react';
import styles from './styles.css';
import cn from 'classnames';
import { Icon } from 'infl-icons';

export default class Alert extends Component {
  static propTypes = {
    title:     PropTypes.string,
    type:      PropTypes.oneOf(['success', 'error', 'info', 'warning']),
    showIcon:  PropTypes.bool,
    closeable: PropTypes.bool,
    showAlert: PropTypes.bool,
    onClose:   PropTypes.func,
    hideIn:    PropTypes.number
  };

  static defaultProps = {
    title:     '',
    showIcon:  false,
    closeable: false,
    showAlert: true,
    onClose:   function() {},
    hideIn:    0
  }

  hideInTimeout = null;

  state = {
    showAlert: this.props.showAlert,
    closeable: this.props.closeable
  };

  componentWillReceiveProps = (newProps) => {
    this.clearHideInTimeout();
    this.setState({
      showAlert: newProps.showAlert,
      closeable: newProps.closeable
    });
  };

  componentDidMount = () => {
    this.hideAlert();
  };

  componentWillUpdate = (nextProps) => {
    this.clearHideInTimeout();
    this.hideAlert(nextProps.hideIn);
  };

  clearHideInTimeout = () =>{
    window.clearTimeout(this.hideInTimeout);
  };

  hideAlert = () => {
    const { hideIn } = this.props;
    if (hideIn > 0) {
      this.hideInTimeout = setTimeout(this.close, hideIn*1000);
    }
  };

  render = () => <div className={this.classes()}>
    <div className={styles.text}>
      {this.title()}
      <div className={styles.alertBody}>
        {this.props.children}
      </div>
    </div>
    {this.closeable()}
  </div>;

  classes = () => 
    cn(
      styles.alertMsg,
      {
        [styles.hasIcon]: this.props.showIcon,
        [styles.hide]: !this.props.showAlert,
        [styles[this.props.type]]: this.props.type
      }
    );
  
  title = () => {
    if (this.props.title) {
      return (
        <h4 className={styles.alertTitle}>
          {this.icon()}
          <span>{this.props.title}</span>
        </h4>
      );
    }
    return null;
  };

  icon = () => {
    const { showIcon } = this.props;

    if (!showIcon)
      return null;
    
    return <span className={styles.alertIcon}>
      <Icon icon={this.determineIconType()}/>
    </span>;
  };

  close = () => {
    this.setState({ showAlert: false });
    this.props.onClose();
  };

  closeable = () => {
    return this.state.closeable
      ? <span className={styles.close} onClick={this.close}>
          <Icon icon='close'/>
        </span>
      : null;
  };
}