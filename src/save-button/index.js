import React, { PropTypes } from 'react';
import { compose, setPropTypes, withProps, setDisplayName } from 'recompose';
import Button from '../button';
import { merge, mergeWith } from 'ramda';
import styles from './styles.css';

const defaultButtonState = {
  'error':   { text: 'Error', type: 'danger', icon: 'exclamation-circle-o' },
  'saved':   { text: 'Saved', type: 'success', icon: 'check-circle-o' },
  'unsaved': { text: 'Save', type: 'primary' },
  'saving':  { text: 'Saving', type: 'primary', icon: 'circle-empty' }
};

const shallowMergeWithDefault = mergeWith(merge, defaultButtonState);

const enhance = compose(
  setDisplayName('SaveButton'),
  setPropTypes({
    saveStatus: PropTypes.oneOf(['unsaved', 'saved', 'saving', 'error']).isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,

    customText: PropTypes.shape({
      unsaved: PropTypes.string,
      saved: PropTypes.string,
      saving: PropTypes.string,
      error: PropTypes.string
    })
  }),
  withProps(({ customText = {}, saveStatus }) => ({
    status: shallowMergeWithDefault(customText)[saveStatus],
    iconClass: saveStatus === 'saving' ? styles.flashing : ''
  }))
);

export default enhance(({ status, onClick, disabled, iconClass }) =>
  <span>
    <Button
      disabled={disabled}
      onClick={onClick}
      type={status.type}
      icon={status.icon}
      iconClass={iconClass}>
      {status.text}
    </Button>
  </span>
);