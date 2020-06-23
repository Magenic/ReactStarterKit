import React from 'react';
import IconButton from '.';
import {ReactComponent as CloseIcon} from 'lib/assets/icons/closeIcon.svg';

export default {
  title: 'Core/Button/Icon Button',
  component: IconButton,
};

export const Default = () => (
  <IconButton>
    <CloseIcon />
  </IconButton>
);

export const Disabled = () => (
  <IconButton disabled>
    <CloseIcon />
  </IconButton>
);
