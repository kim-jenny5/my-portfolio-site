import { useState } from 'react';

export function useImageLoader() {
  const [loadingStates, setLoadingStates] = useState({});

  const handleImageLoad = (id) => {
    setLoadingStates((prev) => ({ ...prev, [id]: false }));
  };

  const renderPlaceholder = (id) => {
    if (loadingStates[id] === undefined) {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));
    }

    return loadingStates[id] ? (
      <div className='absolute inset-0 animate-pulse bg-gray-200'></div>
    ) : null;
  };

  const isLoading = (id) => loadingStates[id] === true;

  return { isLoading, handleImageLoad, renderPlaceholder };
}
