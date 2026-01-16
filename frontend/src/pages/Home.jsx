import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTabletOffset = () => {
    const minWidth = 768;
    const maxWidth = 1024;
    
    if (windowWidth >= minWidth && windowWidth < maxWidth) {
      const progress = (windowWidth - minWidth) / (maxWidth - minWidth);
      return progress * 150; // Moves down 150px as width grows from 768 to 1024
    }
    return 0;
  };

  return (
    <>
      <div className="w-full bg-white z-0 h-screen lg:h-auto lg:min-h-screen relative overflow-visible">
        {/* Hero Image */}
        <img
          src="/src/assets/hero-model.jpg"
          alt="Aurora Apparel Model"
          className="w-screen h-screen lg:w-full lg:h-full object-cover lg:object-fill object-top absolute inset-0 lg:relative lg:inset-auto"
        />

        {/* Gradient Overlay (Left to Right: Black to Transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        {/* Hero Content - Left Side */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:bottom-auto md:left-0 md:translate-x-0 lg:top-20 lg:left-12 flex flex-col justify-start pt-20 md:pt-28 lg:pt-36 px-6 lg:px-0 z-10 pointer-events-none"
          style={{
            transform: window.innerWidth >= 768 && window.innerWidth < 1024 
              ? `translateX(0) translateY(${getTabletOffset()}px)` 
              : window.innerWidth < 768
              ? 'translateX(-50%) translateY(0)'
              : 'translateX(0) translateY(0)'
          }}
        >
          <div className="pointer-events-auto justify-center md:justify-start text-center md:text-left whitespace-nowrap">
            <h1 className="text-5xl lg:text-8xl font-semibold lg:font-normal text-white lg:leading-[0.8] lg:mb-2 tracking-wider" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              Elevated<br />Minimalism
            </h1>
            <p className="text-gray-200 text-xl lg:text-2xl font-normal mb-3 lg:mb-6 leading-relaxed tracking-wide" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
              Minimal form. Maximum integrity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row gap-6 mb-6 pointer-events-auto justify-center md:justify-start">
            <Link
              to="/products"
              className="relative px-10 py-3 bg-white border border-white text-black font-semibold text-xl tracking-widest overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">SHOP NOW</span>
              <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
            <Link
              to="/products"
              className="hidden lg:block relative px-10 py-3 border border-white text-white font-semibold text-xl tracking-widest overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">DISCOVER</span>
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen"></div>
    </>
  );
}