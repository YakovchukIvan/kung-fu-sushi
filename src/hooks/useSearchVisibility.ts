import { useState, useEffect } from 'react';

export const useSearchVisibility = (isWideScreen: boolean) => {
  const [searchView, setSearchView] = useState(isWideScreen);

  useEffect(() => {
    setSearchView(isWideScreen);
  }, [isWideScreen]);

  const toggleSearchView = () => setSearchView((prev) => !prev);

  return { searchView, toggleSearchView };
};
