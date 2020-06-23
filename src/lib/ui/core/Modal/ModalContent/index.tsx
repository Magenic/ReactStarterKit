import React from 'react';
import styled from 'styled-components/macro';
import {Paper, PaperProps, IconButton} from 'lib/ui/core';
import {pixelsToRem} from 'lib/utils';
import {ReactComponent as CloseIcon} from 'lib/assets/icons/closeIcon.svg';
import {ModalProps} from '../';

export interface ModalContentProps
  extends PaperProps,
    Pick<ModalProps, 'onRequestClose'> {}

const ModalWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

const ModalHeading = styled.span`
  display: block;
  font-size: ${pixelsToRem(32)};
  text-align: center;
  margin: ${pixelsToRem(60)} 0 ${pixelsToRem(30)} 0;
`;

const CloseIconButton = styled(IconButton)`
  position: absolute;
  top: 25px;
  right: 16px;
`;

const ModalStatusBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background-color: ${props => props.theme.color.status.warning.main};
`;

const ModalBody = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const ModalContent = ({
  'data-testid': testId = 'modal-content',
  onRequestClose,
  children,
  ...rest
}: ModalContentProps) => {
  return (
    <ModalWrapper data-testid={testId} {...rest}>
      <ModalStatusBar />
      <CloseIconButton onClick={onRequestClose}>
        <CloseIcon />
      </CloseIconButton>
      <ModalHeading>Modal Heading</ModalHeading>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>
  );
};

export default ModalContent;
