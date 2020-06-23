import {renderHook} from '@testing-library/react-hooks';
import useDocumentTitle, {getAppTitle} from '.';

test('useDocumentTitle() hook', () => {
  const title = 'hello world';
  renderHook(() => useDocumentTitle(title));
  expect(document.title).toBe(getAppTitle(title));
});
