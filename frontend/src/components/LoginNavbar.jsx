import { Link } from 'react-router-dom';

export default function LoginNavbar() {
  return (
    <nav className="bg-white w-full h-[8vh] sm:h-[10vh] px-6 flex items-center justify-center border-b border-gray-200">
      <Link to="/" className="text-3xl sm:text-3xl font-bold text-black hover:opacity-80">
        Obsidian
      </Link>
    </nav>
  );
}
