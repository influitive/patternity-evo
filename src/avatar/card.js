/*eslint max-len: 0*/
import devboard from 'devboard';
import React from 'react';
import Avatar from './index';
import avatarImage from '../../example/assets/avatar.jpg';

const devcard = devboard.ns('Avatar');

devcard(
  'Avatar with default',
  <Avatar />
);

devcard(
  'Avatar with inline',
  <Avatar inline="true" />
);

devcard(
  'Avatar with image',
  <Avatar src={avatarImage} />
);
