import {useEffect, useRef} from 'react';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const validateIsMounted = (callbacks: () => void) => {
    isMounted.current && callbacks();
  };

  return {isMounted, validateIsMounted};
}

export default useIsMounted;
