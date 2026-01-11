import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu({ isOpen, onClose }) {
  const mainCategories = [
    { name: 'New & Featured', path: '/products/new' },
    { name: 'Men', path: '/products/men' },
    { name: 'Women', path: '/products/women' },
    { name: 'Kids', path: '/products/kids' },
    { name: 'Sale', path: '/products/sale' },
  ];

  const utilityItems = [
    { icon: 'help', label: 'Help', path: '/help' },
    { icon: 'shopping_bag', label: 'Bag', path: '/cart' },
    { icon: 'calendar_month', label: 'Orders', path: '/orders' },
    { icon: 'store', label: 'Find a Store', path: '/stores' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen 
            ? 'bg-black bg-opacity-50 opacity-100 pointer-events-auto' 
            : 'bg-black bg-opacity-0 opacity-0 pointer-events-none delay-300'
        }`}
        onClick={onClose}
      ></div>

      <div className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 md:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-[11px]">
            <h2 className="text-3xl font-bold text-black">Menu</h2>
            <button onClick={onClose} className="text-2xl text-black hover:text-gray-600 flex justify-between items-center">
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pt-6 pb-[150px]">
            {/* Main Categories */}
            <nav>
              {mainCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={handleLinkClick}
                  className="flex justify-between items-center px-6 py-2 text-3xl font-medium text-black hover:bg-gray-50"
                >
                  <span>{category.name}</span>
                  <span className="material-symbols-rounded text-3xl">chevron_right</span>
                </Link>
              ))}
            </nav>

            {/* Membership Section */}
            <div className="px-6 py-8 ">
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Become a Member for the best products, inspiration and stories in sport.{' '}
                <Link to="/membership" onClick={handleLinkClick} className="text-black font-semibold hover:underline">
                  Learn more
                </Link>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleLinkClick}
                  className="flex-1 bg-black text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition text-xl"
                >
                  <Link to="/register">Join Us</Link>
                </button>
                <button
                  onClick={handleLinkClick}
                  className="flex-1 border-2 border-black text-black font-semibold py-3 rounded-full hover:bg-black hover:text-white transition text-xl"
                >
                  <Link to="/login">Sign In</Link>
                </button>
              </div>
            </div>

            {/* Utility Items */}
            <div>
              {utilityItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 px-6 py-2 text-xl font-semibold text-black hover:bg-gray-50"
                >
                  <span className="material-symbols-rounded font-light text-3xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
