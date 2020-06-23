import React from 'react';
import OutlinedButton from '.';

export default {
  title: 'Core/Button/Outlined Button',
  component: OutlinedButton,
};

export const Default = () => <OutlinedButton>Outlined Button</OutlinedButton>;

export const Grey = () => (
  <OutlinedButton color="grey">Outlined Button</OutlinedButton>
);

export const Primary = () => (
  <OutlinedButton color="primary">Outlined Button</OutlinedButton>
);

export const Disabled = () => (
  <OutlinedButton disabled>Outlined Button</OutlinedButton>
);
