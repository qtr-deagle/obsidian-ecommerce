import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white w-full h-[8vh] sm:h-[10vh] px-4 sm:px-6 relative">
      <div className="flex items-center justify-between h-full ">
        {/* Start: Hamburger Menu */}
        <div className="flex items-center">
          <button className="text-2xl hover:text-gray-300">☰</button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-2xl sm:text-3xl font-bold">
          Obsidian
        </div>

        {/* End: Search and Cart */}
        <div className="flex items-center gap-4">
          <button className="text-xl hover:text-gray-300">🔍</button>
          <Link to="/cart" className="text-xl hover:text-gray-300">🛒</Link>
        </div>
      </div>
    </nav>
  );
}