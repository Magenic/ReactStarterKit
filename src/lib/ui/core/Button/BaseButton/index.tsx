import React from 'react';
import styled from 'styled-components/macro';
import {ComponentWithChildren, TestableComponent} from 'lib/@types';

export type ButtonColors = 'primary' | 'grey';

export interface BaseButtonProps
  extends ComponentWithChildren,
    TestableComponent,
    React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  value?: string | string[] | number;
  color?: ButtonColors;
}

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid transparent;
  border-radius: 3px;
  margin: 1em 0;
  padding: 0.25em;

  &:hover {
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }
`;

export const BaseButton = ({
  'data-testid': testId = 'base-button',
  children,
  disabled = false,
  type = 'button',
  ...rest
}: BaseButtonProps) => (
  <StyledButton data-testid={testId} type={type} disabled={disabled} {...rest}>
    {children}
  </StyledButton>
);

export default BaseButton;
