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

      <nav className="bg-white text-white w-full h-[8vh] sm:h-[10vh] px-6 relative">
        <div className="flex items-center justify-between h-full ">
          {/* Start: Logo */}
          <Link to="/" className="text-3xl sm:text-3xl font-bold text-black hover:opacity-80">
            Obsidian
          </Link>

          {/* End: Search and Cart */}
          <ul className="flex items-center justify-center gap-4">
            <li>
              <button onClick={() => setShowSearch(true)} className="flex items-center justify-center text-xl text-gray-700 hover:text-gray-300">
                <span className="material-symbols-rounded">search</span>
              </button>
            </li>
            <li>
              <Link to="/cart" className="flex items-center justify-center text-xl text-gray-700 hover:text-gray-300">
                <span className="material-symbols-rounded">shopping_bag</span>
              </Link>
            </li>
            <li>
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