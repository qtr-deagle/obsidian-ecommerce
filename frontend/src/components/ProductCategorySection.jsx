import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 1, title: 'NEW ARRIVALS', image: '/src/assets/new-Arrivals.jpg', path: '/new-arrivals' },
  { id: 2, title: 'MENS', image: '/src/assets/mens.jpg', path: '/mens' },
  { id: 3, title: 'WOMENS', image: '/src/assets/womens.jpg', path: '/womens' },
  { id: 4, title: 'BESTSELLERS', image: '/src/assets/best-sellers.jpg', path: '/bestsellers' },
];

export default function ProductCategorySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop & Tablet: Grid Layout (2x2) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-start">
                <div className="relative bg-white border border-white px-6 py-2 rounded-full overflow-hidden group/badge">
                  <span className="relative z-10 text-black font-semibold text-xl tracking-wider transition-colors duration-500 group-hover/badge:text-white">
                    {category.title}
                  </span>
                  <div className="absolute inset-0 bg-black translate-x-full group-hover/badge:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] flex-shrink-0 snap-start cursor-pointer"
                style={{ width: 'calc(100vw - 130px)' }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-start">
                  <div className="relative bg-white border border-white px-6 py-2 rounded-full overflow-hidden group/badge">
                    <span className="relative z-10 text-black font-semibold text-sm tracking-wider transition-colors duration-500 group-hover/badge:text-white">
                      {category.title}
                    </span>
                    <div className="absolute inset-0 bg-black translate-x-full group-hover/badge:translate-x-0 transition-transform duration-500"></div>
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
