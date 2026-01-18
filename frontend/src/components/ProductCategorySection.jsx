import { Link } from 'react-router-dom';
import { memo, useRef, useEffect, useState, useMemo } from 'react';
import useImagePreload from '../hooks/useImagePreload';

const CATEGORIES = [
  { id: 1, title: 'NEW ARRIVALS', image: '/images/new-arrivals.jpg', path: '/new-arrivals' },
  { id: 2, title: 'MENS', image: '/images/mens.jpg', path: '/mens' },
  { id: 3, title: 'WOMENS', image: '/images/womens.jpg', path: '/womens' },
  { id: 4, title: 'BESTSELLERS', image: '/images/best-sellers.jpg', path: '/bestsellers' },
];

function ProductCategorySection() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [centeredCardId, setCenteredCardId] = useState(CATEGORIES[0].id);
  const scrollContainerRef = useRef(null);
  const observerRef = useRef(null);

  // Preload all images immediately
  const imageUrls = useMemo(() => CATEGORIES.map(cat => cat.image), []);
  useImagePreload(imageUrls);

  useEffect(() => {
    // Create observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering
          if (observerRef.current && containerRef.current) {
            observerRef.current.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Detect centered card on mobile scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerWidth = scrollContainer.clientWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const centerX = scrollLeft + containerWidth / 2;

      const cards = scrollContainer.querySelectorAll('a');
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - scrollContainer.getBoundingClientRect().left + scrollLeft;
        
        if (Math.abs(cardCenterX - centerX) < 50) {
          const categoryId = parseInt(card.getAttribute('data-category-id'));
          setCenteredCardId(categoryId);
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-10 lg:py-24" ref={containerRef}>
      <div className="w-full px-6 lg:px-8">
        {/* Desktop & Tablet: Grid Layout (2x2) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="relative overflow-hidden rounded-3xl hover:rounded-[500px] aspect-[3/4] cursor-pointer transition-all duration-700 hover:duration-700"
            >
              <img
                src={category.image}
                alt={category.title}
                className={`w-full h-full object-cover transition-opacity duration-1000 will-change-transform ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="group relative px-6 py-2.5
            text-sm font-semibold tracking-[0.2em] uppercase
            text-white
            bg-white/20 backdrop-blur-md
            border border-white/30
            rounded-full overflow-hidden
            group-hover:bg-white/30 transition-colors duration-[400ms] hover:bg-black/80 cursor-pointer">
                  <span className="relative z-10 text-white font-semibold text-xl tracking-wider transition-colors duration-[400ms]">
                    {category.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden w-screen -mx-6">
          <div ref={scrollContainerRef} className="flex overflow-x-auto overflow-y-visible scroll-snap-type-x-mandatory gap-[5vw] pb-2 scrollbar-hide px-5" style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                data-category-id={category.id}
                className={`relative overflow-hidden aspect-[3/4] flex-shrink-0 scroll-snap-align-center cursor-pointer transition-all duration-700 ${
                  centeredCardId === category.id ? 'rounded-[500px]' : 'rounded-2xl hover:rounded-[40px]'
                }`}
                style={{ width: '78vw', scrollSnapAlign: 'center' }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className={`w-full h-full object-cover transition-opacity duration-500 will-change-transform ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  <div className="group relative px-6 py-2.5 text-sm font-semibold tracking-[0.2em] uppercase text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-full overflow-hidden group-hover:bg-white/30 transition-colors duration-[400ms] cursor-pointer">
                    <span className="relative z-10 text-white font-semibold text-xl tracking-wider transition-colors duration-500">
                      {category.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for carousel */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
export default memo(ProductCategorySection);