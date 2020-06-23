import {renderHook, act} from '@testing-library/react-hooks';
import usePrevious from '.';
import {useState} from 'react';

test('usePrevious() hook', () => {
  const {result} = renderHook(() => {
    const [count, setCount] = useState(0);

    return {
      hook: usePrevious(count),
      count,
      setCount,
    };
  });

  expect(result.current.hook).toBe(undefined);

  act(() => {
    result.current.setCount(10);
  });

  expect(result.current.hook).toBe(0);
});
