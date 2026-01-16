import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchModal from './SearchModal';
import NavMenu from './NavMenu';

export default function Navbar({ isScrolled = false }) {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const bgClass = isScrolled ? 'bg-white' : 'bg-transparent';
  const textColorClass = isScrolled ? 'text-black' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:opacity-70' : 'hover:opacity-80';

  return (
    <>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
      <NavMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />

      <nav className={`${bgClass} ${textColorClass} w-full h-14 lg:h-20 px-6 lg:px-12 fixed top-0 z-30 transition-all duration-1000`}>
        <div className="flex items-center justify-between h-full w-full">
          {/* Left Section: Logo */}
          <div className="hidden lg:flex lg:w-1/3 lg:justify-start">
            <Link to="/" className={`text-3xl sm:text-3xl font-bold ${textColorClass} ${hoverColorClass}`}>
              Obsidian
            </Link>
          </div>

          {/* Mobile Logo */}
          <Link to="/" className={`lg:hidden text-3xl font-bold ${textColorClass} ${hoverColorClass}`}>
            Obsidian
          </Link>

          {/* Center Section: Navigation Menu - Tablet and Up */}
          <ul className={`hidden lg:flex lg:w-1/3 lg:items-center lg:justify-center gap-8`}>
            <li>
              <Link to="/products/new" className={`text-2xl font-medium whitespace-nowrap ${textColorClass} ${hoverColorClass}`}>
                New & Featured
              </Link>
            </li>
            <li>
              <Link to="/products/men" className={`text-2xl font-medium ${textColorClass} ${hoverColorClass}`}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/products/women" className={`text-2xl font-medium ${textColorClass} ${hoverColorClass}`}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/products/kids" className={`text-2xl font-medium ${textColorClass} ${hoverColorClass}`}>
                Kids
              </Link>
            </li>
            <li>
              <Link to="/products/sale" className={`text-2xl font-medium ${textColorClass} ${hoverColorClass}`}>
                Sale
              </Link>
            </li>
          </ul>

          {/* Right Section: Search and Cart */}
          <ul className="flex lg:w-1/3 lg:justify-end items-center justify-center gap-4">
            {/* Search - Icon only on mobile/tablet, full bar on desktop */}
            <li className="hidden lg:flex">
              <button onClick={() => setShowSearch(true)} className={`flex items-center gap-1 px-3 py-1 rounded-full duration-300 ease-in transition-colors w-44 ${isScrolled ? 'bg-gray-200 hover:bg-gray-300' : 'bg-white/20 hover:bg-white/30'}`}>
                <span className={`absolute material-symbols-rounded text-2xl ${isScrolled ? 'text-gray-700' : 'text-white'}`}>search</span>
                <span className={`font-medium text-xl ml-7 ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>Search</span>
              </button>
            </li>
            <li className="lg:hidden">
              <button onClick={() => setShowSearch(true)} className={`flex items-center justify-center text-xl ${textColorClass} hover:opacity-70`}>
                <span className="material-symbols-rounded">search</span>
              </button>
            </li>
            <li>
              <Link to="/cart" className={`flex items-center justify-center text-xl ${textColorClass} hover:opacity-70`}>
                <span className="material-symbols-rounded">shopping_bag</span>
              </Link>
            </li>
            <li className="lg:hidden">
              <button onClick={() => setShowMenu(true)} className={`flex items-center justify-center text-2xl ${textColorClass} hover:opacity-70`}>
                <span className="material-symbols-rounded">menu</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}