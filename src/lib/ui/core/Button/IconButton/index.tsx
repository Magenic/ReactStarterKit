import React from 'react';
import styled, {css} from 'styled-components/macro';

import BaseButton, {BaseButtonProps} from '../BaseButton';
import ButtonConfig from '../button.config';

export type IconButtonProps = BaseButtonProps;

const activeStyles = css`
  color: ${ButtonConfig.color.grey.hover};
  background-color: transparent;

  &:hover {
    color: ${ButtonConfig.color.grey.contrastText};
    background-color: ${ButtonConfig.color.grey.hover};
  }

  &:active,
  &:focus {
    background-color: ${ButtonConfig.color.grey.hover};
    outline: none;
  }
`;

const disabledStyles = css`
  color: ${props => props.theme.color.common.white};
  background-color: ${props => props.theme.color.status.disabled};
`;

const baseStyles = css`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  transition: all 0.1s linear;
`;

const StyledButton = styled(BaseButton)`
  ${baseStyles}
  ${props => (props.disabled ? disabledStyles : activeStyles)}
`;

export const IconButton = ({
  'data-testid': testId = 'icon-button',
  children,
  color = 'primary',
  ...rest
}: IconButtonProps) => (
  <StyledButton data-testid={testId} color={color} {...rest}>
    {children}
  </StyledButton>
);

export default IconButton;
