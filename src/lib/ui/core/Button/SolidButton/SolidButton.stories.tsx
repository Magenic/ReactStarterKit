import React from 'react';
import SolidButton from '.';

export default {
  title: 'Core/Button/Solid Button',
  component: SolidButton,
};

export const Default = () => <SolidButton>Solid Button</SolidButton>;

export const Grey = () => <SolidButton color="grey">Solid Button</SolidButton>;

export const Primary = () => (
  <SolidButton color="primary">Solid Button</SolidButton>
);

export const Disabled = () => <SolidButton disabled>Solid Button</SolidButton>;
