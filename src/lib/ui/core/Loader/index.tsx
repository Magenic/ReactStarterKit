import React from 'react';
import styled, {keyframes, css} from 'styled-components/macro';
import {TestableComponent} from 'lib/@types';

export interface LoaderProps extends TestableComponent {
  size?: string;
  thickness?: number;
}
export interface LoaderStyleProps {
  width: string;
  height: string;
}

// ==============================
// ROOT STYLES
// ==============================
const BASESIZE = 44;
const circularRotateframes = keyframes`
  0% {
    /* Fix IE 11 wobbly */
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rootAnimation = css`
  animation: ${circularRotateframes} 1.4s linear infinite;
`;

const StyledRoot = styled.div<LoaderStyleProps>`
  display: inline-block;
  color: ${props => props.theme.color.primary.main};
  width: ${props => props.width};
  height: ${props => props.height};
  ${rootAnimation};
`;
// ==============================

// ==============================
// SVG STYLES
// ==============================
const StyledSvg = styled.svg`
  display: block;
`;
// ==============================

// ==============================
// CIRCLE STYLES
// ==============================

const circularDashKeyframes = keyframes`
  0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
  50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

const circleAnimation = css`
  animation: ${circularDashKeyframes} 1.4s ease-in-out infinite;
`;

const StyledCircle = styled.circle`
  stroke: currentColor;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  ${circleAnimation};
`;

export const Loader = ({
  'data-testid': testId = 'loader',
  size = '80px',
  thickness = 3.6,
  ...rest
}: LoaderProps) => (
  <StyledRoot
    data-testid={testId}
    width={size}
    height={size}
    role="progressbar"
    {...rest}
  >
    <StyledSvg
      data-testid={`${testId}-svg`}
      viewBox={`${BASESIZE / 2} ${BASESIZE / 2} ${BASESIZE} ${BASESIZE}`}
    >
      <StyledCircle
        data-testid={`${testId}-svg-circle`}
        cx={BASESIZE}
        cy={BASESIZE}
        r={(BASESIZE - thickness) / 2}
        fill="none"
        strokeWidth={thickness}
      />
    </StyledSvg>
  </StyledRoot>
);

export default Loader;
