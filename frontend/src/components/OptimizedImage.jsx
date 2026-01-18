import { useState } from 'react';

export default function OptimizedImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? '' : 'bg-gray-200'}`}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      decoding="async"
    />
  );
}
