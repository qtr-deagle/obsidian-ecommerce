import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchModal from './SearchModal';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
      <NavMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />

      <nav className="bg-white text-white w-full h-[8vh] lg:h-[10vh] px-6 lg:px-12 relative">
        <div className="flex items-center justify-between h-full ">
          {/* Start: Logo */}
          <Link to="/" className="text-3xl sm:text-3xl font-bold text-black hover:opacity-80">
            Obsidian
          </Link>

          {/* Center: Navigation Menu - Tablet and Up */}
          <ul className="hidden lg:flex items-center justify-center gap-8 ml-20">
            <li>
              <Link to="/products/new" className="text-2xl font-medium text-black hover:opacity-70">
                New & Featured
              </Link>
            </li>
            <li>
              <Link to="/products/men" className="text-2xl font-medium text-black hover:opacity-70">
                Men
              </Link>
            </li>
            <li>
              <Link to="/products/women" className="text-2xl font-medium text-black hover:opacity-70">
                Women
              </Link>
            </li>
            <li>
              <Link to="/products/kids" className="text-2xl font-medium text-black hover:opacity-70">
                Kids
              </Link>
            </li>
            <li>
              <Link to="/products/sale" className="text-2xl font-medium text-black hover:opacity-70">
                Sale
              </Link>
            </li>
          </ul>

          {/* End: Search and Cart */}
          <ul className="flex items-center justify-center gap-4">
            {/* Search - Icon only on mobile/tablet, full bar on desktop */}
            <li className="hidden lg:flex">
              <button onClick={() => setShowSearch(true)} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors w-44">
                <span className="absolute material-symbols-rounded text-gray-700 text-2xl">search</span>
                <span className="text-gray-500 font-medium text-xl ml-7">Search</span>
              </button>
            </li>
            <li className="lg:hidden">
              <button onClick={() => setShowSearch(true)} className="flex items-center justify-center text-xl text-gray-700 hover:text-gray-300">
                <span className="material-symbols-rounded">search</span>
              </button>
            </li>
            <li>
              <Link to="/cart" className="flex items-center justify-center text-xl text-gray-700 hover:text-gray-300">
                <span className="material-symbols-rounded">shopping_bag</span>
              </Link>
            </li>
            <li className="lg:hidden">
              <button onClick={() => setShowMenu(true)} className="flex items-center justify-center text-2xl text-gray-700 hover:text-gray-300">
                <span className="material-symbols-rounded">menu</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

// make the "text-gray-800" to "text-black" soon when you change the icons to thin