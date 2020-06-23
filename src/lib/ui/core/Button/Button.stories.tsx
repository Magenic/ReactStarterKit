import React from 'react';

import {ReactComponent as CloseIcon} from 'lib/assets/icons/closeIcon.svg';
import {SolidButton, OutlinedButton, IconButton} from '.';

export default {
  title: 'Core/Button',
};

export const All = () => (
  <>
    <h2>Solid Buttons</h2>
    <SolidButton>Default</SolidButton>
    <SolidButton color="grey">Grey</SolidButton>
    <SolidButton disabled>Disabled</SolidButton>

    <h2>Outlined Buttons</h2>
    <OutlinedButton>Default</OutlinedButton>
    <OutlinedButton color="grey">Grey</OutlinedButton>
    <OutlinedButton disabled>Disabled</OutlinedButton>

    <h2>IconButton</h2>
    <IconButton>
      <CloseIcon />
    </IconButton>
    <IconButton disabled>
      <CloseIcon />
    </IconButton>
  </>
);
