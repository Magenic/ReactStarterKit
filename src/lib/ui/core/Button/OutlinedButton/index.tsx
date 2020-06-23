import React from 'react';
import styled, {css} from 'styled-components/macro';

import BaseButton, {BaseButtonProps} from '../BaseButton';
import ButtonConfig from '../button.config';

export type OutlinedButtonProps = BaseButtonProps;

const colorPrimary = css`
  color: ${ButtonConfig.color.primary.main};
  border-color: ${ButtonConfig.color.primary.main};

  &:hover,
  &:active,
  &:focus {
    color: ${ButtonConfig.color.primary.hover};
    border-color: ${ButtonConfig.color.primary.hover};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const colorGrey = css`
  color: ${ButtonConfig.color.grey.main};
  border-color: ${ButtonConfig.color.grey.main};

  &:hover,
  &:active,
  &:focus {
    color: ${ButtonConfig.color.grey.hover};
    border-color: ${ButtonConfig.color.grey.hover};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const disabled = css`
  color: ${props => props.theme.color.status.disabled};
  border-color: ${props => props.theme.color.status.disabled};
`;

const StyledButton = styled(BaseButton)`
  padding: 0.25em 1em;

  ${props => {
    if (props.disabled) {
      return disabled;
    } else {
      switch (props.color) {
        case 'primary':
          return colorPrimary;

        default:
          return colorGrey;
      }
    }
  }}
`;

export const OutlinedButton = ({
  'data-testid': testId = 'outlined-button',
  children,
  color = 'primary',
  ...rest
}: OutlinedButtonProps) => (
  <StyledButton data-testid={testId} color={color} {...rest}>
    {children}
  </StyledButton>
);

export default OutlinedButton;
