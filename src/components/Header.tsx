import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center w-full top-0 z-10">
      <div className="flex items-center">
        <div
          className="h-16 w-16 bg-cover bg-center mr-2 rounded-full border-2"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg")',
            borderColor: '#007BFF', // Blue color
          }}
        ></div>
        <div className="text-2xl font-bold" style={{ color: '#007BFF' }}>Nazarene Vehicle Rental</div> {/* Blue color */}
      </div>
      <nav className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="text-gray-700 hover:text-blue-500 mx-2">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500 mx-2">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500 mx-2">
          Contact
        </Link>
        <Link to="/terms" className="text-gray-700 hover:text-blue-500 mx-2">
          Terms
        </Link>
        <Link to="/privacy" className="text-gray-700 hover:text-blue-500 mx-2">
          Privacy
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2 focus:outline-none"
            style={{ backgroundColor: '#007BFF' }} // Blue color
          >
            Login
            <svg
              className="ml-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                User Login
              </Link>
              <Link
                to="/admin-login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setDropdownOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
        <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mx-2">
          Register
        </Link>
      </nav>
      <button className="md:hidden flex items-center" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
