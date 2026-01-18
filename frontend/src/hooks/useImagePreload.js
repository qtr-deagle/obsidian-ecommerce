import { useEffect } from 'react';

export default function useImagePreload(imageUrls) {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    // Preload images on next tick to not block initial render
    const timeoutId = setTimeout(preloadImages, 0);

    return () => clearTimeout(timeoutId);
  }, [imageUrls]);
}
