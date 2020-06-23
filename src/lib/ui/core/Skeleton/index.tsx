import React from 'react';
import styled, {keyframes, css} from 'styled-components/macro';
import {isNull} from 'lodash';

import SkeletonConfig from './skeleton.config';
import {TestableComponent} from 'lib/@types';

export interface SkeletonProps extends TestableComponent {
  count?: number;
  width?: null | string;
  height?: null | string;
  circle?: boolean;
}

export type SkeletonStyleProps = Omit<SkeletonProps, 'count'>;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const animationStyles = css`
  animation: ${skeletonKeyframes} 1.2s ease-in-out infinite;
`;

const StyledSkeleton = styled.span<SkeletonStyleProps>`
  background-color: ${SkeletonConfig.color.base};
  background-image: linear-gradient(
    90deg,
    ${SkeletonConfig.color.base},
    ${SkeletonConfig.color.highlight},
    ${SkeletonConfig.color.base}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  width: ${props => (!isNull(props.width) ? props.width : '100%')};
  ${props => !isNull(props.height) && `height: ${props.height}`};
  ${props => props.circle && 'border-radius: 100%'};
  ${animationStyles};
`;

export const Skeleton = ({
  'data-testid': testId = 'skeleton',
  count = 1,
  width = null,
  height = null,
  circle = false,
}: SkeletonProps) => {
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <StyledSkeleton
        key={testId + '-' + i}
        data-testid={testId}
        width={width}
        height={height}
        circle={circle}
      >
        &zwnj;
      </StyledSkeleton>
    );
  }
  return <>{elements}</>;
};

export default Skeleton;
