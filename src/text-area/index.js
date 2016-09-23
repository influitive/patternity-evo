import React, { PropTypes } from 'react';
import cn from 'classnames';
import InputIcon from './input-icon';
import InputMessage from './input-message';
import styles from './styles.css';
import formStyles from '../shared/form-styles.css';

const TextAreaContainer = ({
  required = false,
  error = false,
  valid = false,
  disabled = false,
  message = '',
  clearable = false,
  children,
  classNames
}) => <span className={cn({
  [formStyles.isRequired]:  required,
  [formStyles.isError]:     error,
  [formStyles.isValid]:     valid,
  [formStyles.isDisabled]:  disabled,
  [formStyles.isClearable]: clearable
}, classNames)}>
  <InputIcon type='text' required={required} />

  {children}

  <InputMessage message={message} />
</span>;

TextAreaContainer.propTypes = {
  required: PropTypes.bool,
  error:    PropTypes.bool,
  valid:    PropTypes.bool,
  disabled: PropTypes.bool,
  message:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array
  ]),
  clearable: PropTypes.bool
};


class TextArea extends React.Component {
  static defaultProps = {
    id:          '',
    value:       '',
    placeholder: '',
    readOnly:    false,
    autofocus:   false,
    autoexpand:  true,

    style: {
      height: 'inherit'
    }
  };

  textRef = null;

  static propTypes = {
    id:          PropTypes.string,
    name:        PropTypes.string.isRequired,
    value:       PropTypes.string,
    placeholder: PropTypes.string,
    readOnly:    PropTypes.bool,
    disabled:    PropTypes.bool,
    autofocus:   PropTypes.bool,
    autoexpand:  PropTypes.bool,
    onChange:    PropTypes.func.isRequired,
    style:       PropTypes.shape({
      height: PropTypes.string
    }),
    ...TextAreaContainer.propTypes
  };

  componentWillReceiveProps(newProps) {
    this.setInputFocus(newProps.autofocus);
  }

  componentDidMount() {
    this.setInputFocus(this.props.autofocus);
  }

  render() {
    return (
      <TextAreaContainer {...this.props} classNames={this.classNames()}>
        <textarea {...this.props} ref={node=>this.textRef = node} />
      </TextAreaContainer>
    );
  }

  setInputFocus = (autofocus) => {
    if (autofocus && this.textRef) { this.textRef.focus(); }
  }

  classNames = () => {
    return {
      [styles.textarea]: true,
      [styles.autoexpand]:  this.props.autoexpand
    };
  }
}

export default TextArea;
