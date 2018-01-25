import '!!style-loader!css-loader!react-select/dist/react-select.css';
import Select, {
  Async as AsyncComponent,
  Creatable as CreatableComponent,
  AsyncCreatable as AsyncCreatableComponent
} from 'react-select';
import { compose, defaultProps, withProps } from 'recompose';
import cn from 'classnames';
import styles from './typeahead.css';

const Styled = compose(
  defaultProps({
    clearable: false,
    backspaceToRemoveMessage: '',
    searchPromptText: '',
    promptTextCreator: () => ''
  }),
  withProps(({ className = '', optionClassName = '' }) => ({
    className: cn(styles['container'], className),
    optionClassName: cn(styles['option'], optionClassName)
  }))
);

export default Styled(Select);
export const Async = Styled(AsyncComponent);
export const Creatable = Styled(CreatableComponent);
export const AsyncCreatable = Styled(AsyncCreatableComponent);
