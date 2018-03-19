import { omit } from 'ramda';
import React from 'react';
import { compose, setPropTypes, withProps, setDisplayName } from 'recompose';
import Button from '../button';
import PropTypes from 'prop-types';
import { merge, mergeWith, map, pipe } from 'ramda';
import styles from './styles.css';

const defaultButtonState = {
  'error':   { text: 'Error', type: 'danger', icon: 'exclamation-circle-o' },
  'saved':   { text: 'Saved', type: 'success', icon: 'check-circle-o' },
  'unsaved': { text: 'Save', type: 'primary' },
  'saving':  { text: 'Saving', type: 'primary', icon: 'circle-empty' }
};

const prepareForMerge = map(value => ({ text: value }));

const mergeWithText = pipe(
  prepareForMerge,
  mergeWith(merge, defaultButtonState)
);

const clean = omit([
  'saveStatus',
  'customText'
]);

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
    status: mergeWithText(customText)[saveStatus],
    iconClass: saveStatus === 'saving' ? styles.flashing : ''
  }))
);

export default enhance(({ status, ...rest }) =>
  <span>
    <Button
      {...clean(rest)}
      type={status.type}
      icon={status.icon} >
      {status.text}
    </Button>
  </span>
);
