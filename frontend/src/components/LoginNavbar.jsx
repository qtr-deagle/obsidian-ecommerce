import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function LoginNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isScrolled ? 'bg-white border-gray-200' : 'bg-transparent border-transparent';

  return (
    <nav className={`${bgClass} w-full h-[8vh] sm:h-[10vh] px-6 flex items-center justify-center border-b fixed top-0 z-50 transition-all duration-300`}>
      <Link to="/" className="text-3xl sm:text-3xl font-bold text-black hover:opacity-80">
        Obsidian
      </Link>
    </nav>
  );
}
