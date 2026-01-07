import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu({ isOpen, onClose }) {
  const [openShop, setOpenShop] = useState(false);

  const categories = [
    { name: 'All Products', path: '/products' },
    { name: 'Shoes', path: '/products/shoes' },
    { name: 'T-Shirts', path: '/products/tshirts' },
    { name: 'Hoodies', path: '/products/hoodies' },
    { name: 'Accessories', path: '/products/accessories' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose}></div>
      )}

      <div className={`fixed top-[-8px] left-0 h-screen w-full bg-white z-50 md:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-6 py-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">Menu</h2>
            <button onClick={onClose} className="text-2xl text-gray-800 hover:text-gray-600">
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>

          <nav className="space-y-4">
            {/* Shop Section */}
            <div>
              <button
                onClick={() => setOpenShop(!openShop)}
                className="w-full flex justify-between items-center py-3 text-lg font-semibold text-black hover:text-gray-600"
              >
                <span>Shop</span>
                <span className={`material-symbols-rounded transition-transform ${openShop ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openShop && (
                <div className="pl-4 space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      onClick={handleLinkClick}
                      className="block py-2 text-gray-700 hover:text-black font-medium"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Menu Items */}
            <Link to="/about" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
              About
            </Link>

            <Link to="/contact" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
              Contact
            </Link>

            <Link to="/sell" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
              Sell With Us
            </Link>

            {/* Account Section */}
            <div className="pt-6 border-t border-gray-300 space-y-3">
              <Link to="/login" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
                Login
              </Link>
              <Link to="/register" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
                Register
              </Link>
              <Link to="/account" onClick={handleLinkClick} className="block py-3 text-lg font-semibold text-black hover:text-gray-600">
                My Account
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
