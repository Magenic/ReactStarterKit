import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {isNull} from 'lodash';
import {ComponentWithChildren} from 'lib/@types';

export type PortalProps = ComponentWithChildren;

const Portal = ({children}: PortalProps) => {
  const mount = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    !isNull(mount) && mount.appendChild(el);
    return () => {
      !isNull(mount) && mount.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
