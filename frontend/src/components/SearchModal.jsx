import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
    const searchInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const popularSearches = ['iPhone', 'Laptop', 'Headphones', 'Smartwatch', 'Tablet'];

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    const handleClearSearch = () => {
        setInputValue('');
        searchInputRef.current?.focus();
    };

    return (
        <>
            {/* Mobile/Tablet Search Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}></div>
            )}

            <div className={`fixed top-0 right-0 h-screen w-full bg-white z-50 lg:hidden transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-6 py-2.5">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex-1 bg-gray-200 rounded-full flex items-center px-4 py-1.5">
                            <span className="material-symbols-rounded text-gray-800 mr-2">search</span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-200 text-black text-xl font-bold focus:outline-none flex-1 placeholder-gray-500"
                                ref={searchInputRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                autoFocus
                            />
                            <div className="flex items-center justify-center">
                                {inputValue && (
                                    <button onClick={handleClearSearch} className="absolute flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800">
                                        <span className="material-symbols-rounded text-white text-lg">close</span>
                                    </button>
                                )}
                            </div>
                        </div>
                        <button onClick={onClose} className="ml-3 text-2xl text-gray-800 font-semibold hover:text-gray-600">
                            Cancel
                        </button>
                    </div>

                    <div>
                        <p className="text-gray-500 text-lg font-semibold mb-4">Popular Search Terms</p>
                        <div className="flex flex-wrap gap-3">
                            {popularSearches.map((search) => (
                                <button
                                    key={search}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 font-semibold text-xl"
                                >
                                    {search}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Search Modal */}
            {isOpen && (
                <div className="hidden lg:fixed lg:inset-0 lg:bg-black lg:bg-opacity-30 lg:z-40" onClick={onClose}></div>
            )}

            <div className={`hidden lg:block fixed top-0 right-0 h-[70vh] w-full bg-white z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-6 py-6">
                    <div className="flex justify-between items-center -mt-1 mb-8 gap-4 px-6">
                        <Link to="/" className="text-3xl sm:text-3xl font-bold text-black hover:opacity-80">
                            Obsidian
                        </Link>
                        <div className="w-1/2 bg-gray-200 rounded-full flex items-center px-3 py-1.5">
                            <span className="material-symbols-rounded text-gray-800 mr-2">search</span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-200 text-black text-xl font-bold focus:outline-none flex-1 placeholder-gray-500"
                                ref={searchInputRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                autoFocus
                            />
                            <div className="flex items-center justify-center">
                                {inputValue && (
                                    <button onClick={handleClearSearch} className="absolute flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-800">
                                        <span className="material-symbols-rounded text-white text-lg">close</span>
                                    </button>
                                )}
                            </div>
                        </div>
                        <button onClick={onClose} className="text-2xl text-gray-800 font-semibold hover:text-gray-600 flex-shrink-0">
                            Cancel
                        </button>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className="w-[40%] px-6">
                            <p className="text-gray-500 text-lg font-semibold mb-4">Popular Search Terms</p>
                            <div className="flex flex-wrap gap-3">
                                {popularSearches.map((search) => (
                                    <button
                                        key={search}
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 font-semibold text-xl"
                                    >
                                        {search}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
