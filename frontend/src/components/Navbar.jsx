// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-gray-900 px-6 py-8 flex justify-between items-center">
      <div className="text-xl font-bold">Obsidian</div>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
        <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
        <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
      </ul>
    </nav>
  );
}