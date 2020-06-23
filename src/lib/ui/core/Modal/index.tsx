import React from 'react';
import styled from 'styled-components/macro';
import {default as ReactModal, Props as ReactModalProps} from 'react-modal';
import {TestableComponent, ComponentWithChildren} from 'lib/@types';
import {ModalContent} from './ModalContent';

export interface ModalProps
  extends ComponentWithChildren,
    TestableComponent,
    ReactModalProps {
  onClose?: () => void;
}

const StyledModal = styled(ReactModal)<ReactModalProps>``;

export const Modal = ({
  'data-testid': testId = 'modal',
  children,
  onRequestClose,
  ...rest
}: ModalProps) => {
  return (
    <StyledModal data-testid={testId} onRequestClose={onRequestClose} {...rest}>
      <ModalContent onRequestClose={onRequestClose}>{children}</ModalContent>
    </StyledModal>
  );
};

export default Modal;
