import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef } from 'react';

function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeoutRef.current);
    };
  }, []);

  const getTabletOffset = useMemo(() => {
    const minWidth = 768;
    const maxWidth = 1024;

    if (windowWidth >= minWidth && windowWidth < maxWidth) {
      const progress = (windowWidth - minWidth) / (maxWidth - minWidth);
      return progress * 150;
    }
    return 0;
  }, [windowWidth]);

  return (
    <div className="w-full bg-white z-0 h-screen lg:h-auto lg:min-h-screen relative overflow-visible">
      {/* Hero Image */}
      <img
        src="/images/hero-model.jpg"
        alt="Aurora Apparel Model"
        className="w-screen h-screen lg:w-full lg:h-full object-cover lg:object-fill object-center lg:object-top absolute inset-0 lg:relative lg:inset-auto"
        style={{ objectPosition: windowWidth < 768 ? '52% center' : 'center top' }}
        loading="eager"
        decoding="async"
      />

      {/* Gradient Overlay (Left to Right: Black to Transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Hero Content - Left Side */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-auto md:left-0 md:translate-x-0 lg:top-20 lg:left-12 flex flex-col justify-start pt-20 md:pt-28 lg:pt-36 px-6 lg:px-0 z-10 pointer-events-none"
        style={{
          transform: windowWidth >= 768 && windowWidth < 1024
            ? `translateX(0) translateY(${getTabletOffset}px)`
            : windowWidth < 768
              ? 'translateX(-50%) translateY(0)'
              : 'translateX(0) translateY(0)'
        }}
      >
        <div className="pointer-events-auto justify-center md:justify-start text-center md:text-left whitespace-nowrap">
          <h1 className="text-5xl lg:text-8xl font-semibold lg:font-normal text-white lg:leading-[0.8] lg:mb-2 tracking-wider" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
            Elevated<br />Minimalism
          </h1>
          <p className="text-gray-100 text-xl lg:text-2xl font-normal mb-3 lg:mb-6 leading-relaxed tracking-wide" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
            Minimal form. Maximum integrity.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex sm:flex-row gap-6 mb-6 pointer-events-auto justify-center md:justify-start">
          <Link
            to="/products"
            className="relative px-10 py-3 bg-white border border-white text-black font-semibold text-xl tracking-widest overflow-hidden group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">SHOP NOW</span>
            <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-300 will-change-transform"></div>
          </Link>
          <Link
            to="/products"
            className="hidden lg:block relative px-10 py-3 border border-white text-white font-semibold text-xl tracking-widest overflow-hidden group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">DISCOVER</span>
            <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 will-change-transform"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
