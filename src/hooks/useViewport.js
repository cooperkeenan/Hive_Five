import { useState, useEffect } from 'react';

export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 428);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};