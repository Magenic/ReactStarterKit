import React from 'react';
import styled, {css} from 'styled-components/macro';

import BaseButton, {BaseButtonProps} from '../BaseButton';
import ButtonConfig from '../button.config';

export type SolidButtonProps = BaseButtonProps;

const colorPrimary = css`
  color: ${ButtonConfig.color.primary.contrastText};
  background-color: ${ButtonConfig.color.primary.main};
  box-shadow: 2px 2px 3px ${props => props.theme.color.shadow};

  &:hover {
    background-color: ${ButtonConfig.color.primary.hover};
    box-shadow: 1px 1px 3px ${props => props.theme.color.shadow};
  }

  &:active,
  &:focus {
    background-color: ${ButtonConfig.color.primary.hover};
    box-shadow: 0px 0px 3px ${props => props.theme.color.shadow};
    outline: none;
  }
`;

const colorGrey = css`
  color: ${ButtonConfig.color.grey.contrastText};
  background-color: ${ButtonConfig.color.grey.main};
  box-shadow: 2px 2px 3px ${props => props.theme.color.shadow};

  &:hover {
    background-color: ${ButtonConfig.color.grey.hover};
    box-shadow: 1px 1px 3px ${props => props.theme.color.shadow};
  }

  &:active,
  &:focus {
    background-color: ${ButtonConfig.color.grey.hover};
    box-shadow: 0px 0px 3px ${props => props.theme.color.shadow};
    outline: none;
  }
`;

const disabled = css`
  color: ${props => props.theme.color.common.white};
  background-color: ${props => props.theme.color.status.disabled};
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

export const SolidButton = ({
  'data-testid': testId = 'solid-button',
  children,
  color = 'primary',
  ...rest
}: SolidButtonProps) => (
  <StyledButton data-testid={testId} color={color} {...rest}>
    {children}
  </StyledButton>
);

export default SolidButton;
