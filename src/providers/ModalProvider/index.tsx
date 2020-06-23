import React from 'react';
import {default as ReactModal} from 'react-modal';
import {ComponentWithChildren} from 'lib/@types';
import './modal.css';
ReactModal.setAppElement('#modal-root');

type ReactModalProviderProps = ComponentWithChildren;

const ModalProvider = ({children}: ReactModalProviderProps) => <>{children}</>;

export default ModalProvider;
