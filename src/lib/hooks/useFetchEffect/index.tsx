import {useEffect, EffectCallback, DependencyList} from 'react';
import {UseFetchReturn} from '../useFetch';

const useFetchEffect = (
  fetch: UseFetchReturn,
  effect: EffectCallback,
  deps: DependencyList = []
): void => {
  return useEffect(
    () => {
      // Call passed Effect Callback
      const effectCallback = effect();
      // Cleanup Function
      return () => {
        // Cancel Fetch when component unmounts
        fetch.cancel();
        // Extend passed EffectCallback cleanup
        effectCallback && effectCallback();
      };
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    deps
  );
};

export default useFetchEffect;
