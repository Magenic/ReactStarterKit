import {useEffect} from 'react';

export const getAppTitle = (title: string) => {
  const appTitle =
    process.env.REACT_APP_NAME && ' - ' + process.env.REACT_APP_NAME;
  return `${title.concat(appTitle || '')}`;
};

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = getAppTitle(title);
  }, [title]);
};

export default useDocumentTitle;
