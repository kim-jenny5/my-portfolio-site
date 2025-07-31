import { useState, useEffect } from 'react';

export function useIsTabletLandscapeUp() {
  const [isTabletLandscapeUp, setIsTabletLandscapeUp] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletLandscapeUp(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTabletLandscapeUp;
}
