import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu({ isOpen, onClose }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    if (!isOpen) {
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  const mainCategories = [
    { 
      name: 'New & Featured', 
      path: '/products/new',
      submenu: [
        { name: 'New Arrivals', path: '/products/new/arrivals' },
        { name: 'Trending', path: '/products/new/trending' },
        { name: 'Limited Edition', path: '/products/new/limited' },
        { name: 'Collaborations', path: '/products/new/collaborations' },
        { name: "Editor's Picks", path: '/products/new/editors-picks' },
        { name: 'Seasonal Highlights', path: '/products/new/seasonal' },
      ]
    },
    { 
      name: 'Men', 
      path: '/products/men',
      submenu: [
        { name: 'Tops', path: '/products/men/tops' },
        { name: 'Bottoms', path: '/products/men/bottoms' },
        { name: 'Footwear', path: '/products/men/footwear' },
        { name: 'Accessories', path: '/products/men/accessories' },
        { name: 'Sportswear', path: '/products/men/sportswear' },
        { name: 'Formal/Casual', path: '/products/men/formal-casual' },
      ]
    },
    { 
      name: 'Women', 
      path: '/products/women',
      submenu: [
        { name: 'Dresses & Jumpsuits', path: '/products/women/dresses' },
        { name: 'Tops', path: '/products/women/tops' },
        { name: 'Bottoms', path: '/products/women/bottoms' },
        { name: 'Footwear', path: '/products/women/footwear' },
        { name: 'Accessories', path: '/products/women/accessories' },
        { name: 'Activewear/Loungewear', path: '/products/women/activewear' },
      ]
    },
    { 
      name: 'Kids', 
      path: '/products/kids',
      submenu: [
        { name: 'Boys Clothing', path: '/products/kids/boys' },
        { name: 'Girls Clothing', path: '/products/kids/girls' },
        { name: 'Baby & Toddler', path: '/products/kids/baby' },
        { name: 'School Essentials', path: '/products/kids/school' },
        { name: 'Shoes & Accessories', path: '/products/kids/shoes-accessories' },
        { name: 'Playwear', path: '/products/kids/playwear' },
      ]
    },
    { 
      name: 'Sale', 
      path: '/products/sale',
      submenu: [
        { name: "Men's Sale", path: '/products/sale/men' },
        { name: "Women's Sale", path: '/products/sale/women' },
        { name: "Kids' Sale", path: '/products/sale/kids' },
        { name: 'Final Clearance', path: '/products/sale/clearance' },
        { name: 'Budget Picks', path: '/products/sale/budget' },
        { name: 'Limited Time Offers', path: '/products/sale/limited-time' },
      ]
    },
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

  const handleCategoryClick = (e, category) => {
    if (category.submenu) {
      e.preventDefault();
      setActiveSubmenu(category.name);
    } else {
      handleLinkClick();
    }
  };

  const goBack = () => {
    setActiveSubmenu(null);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-200 ${
          isOpen 
            ? 'bg-black bg-opacity-50 opacity-100 pointer-events-auto' 
            : 'bg-black bg-opacity-0 opacity-0 pointer-events-none delay-200'
        }`}
        onClick={onClose}
      ></div>

      <div className={`fixed top-0 right-0 h-screen w-[320px] bg-white z-50 lg:hidden transition-transform duration-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Main Menu */}
          <div className={`flex flex-col h-full transition-transform duration-200 transform ${activeSubmenu ? '-translate-x-full' : 'translate-x-0'}`}>
            {/* Header */}
            <div className={`flex justify-end items-center px-6 pt-4 transition-opacity duration-200 ${activeSubmenu ? 'opacity-0' : 'opacity-100'}`}>
              <button onClick={onClose} className="text-2xl text-black hover:text-gray-600">
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div ref={scrollContainerRef} className={`flex-1 overflow-y-auto pt-6 pb-[150px] transition-opacity duration-200 ${activeSubmenu ? 'opacity-0' : 'opacity-100'}`}>
              {/* Main Categories */}
              <nav>
                {mainCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.submenu ? '#' : category.path}
                    onClick={(e) => handleCategoryClick(e, category)}
                    className="flex justify-between items-center px-6 py-2 text-3xl font-medium text-black hover:bg-gray-50"
                  >
                    <span>{category.name}</span>
                    {(category.submenu || category.path) && <span className="material-symbols-rounded text-3xl">chevron_right</span>}
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

          {/* Submenu */}
          <div className={`flex flex-col h-full absolute top-0 right-0 w-full bg-white transition-transform duration-200 transform ${activeSubmenu ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Submenu Header */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <button onClick={goBack} className="flex items-center gap-2 text-xl font-semibold text-black hover:text-gray-600">
                <span className="material-symbols-rounded">arrow_back</span>
                <span>All</span>
              </button>
              <button onClick={onClose} className="text-2xl text-black hover:text-gray-600">
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>

            {/* Submenu Title */}
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-3xl font-medium text-black">{activeSubmenu}</h3>
            </div>

            {/* Submenu Items */}
            <div className="flex-1 overflow-y-auto pb-[150px]">
              <nav>
                {mainCategories.find(c => c.name === activeSubmenu)?.submenu?.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                    className="flex justify-between items-center px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && <span className="material-symbols-rounded text-2xl">chevron_right</span>}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
