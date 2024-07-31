import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css';

const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-teal-500 shadow-md p-4 flex justify-between items-center w-full top-0 z-10">
        <div className="flex items-center">
          <div
            className="h-16 w-16 bg-cover bg-center mr-2 rounded-full border-2 border-teal-500"
            style={{ backgroundImage: 'url("https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg")' }}
          ></div>
          <div className="text-2xl font-bold text-white">Nazarene Vehicle Rental</div>
        </div>
        <nav className="hidden md:flex items-center">
          <Link to="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200 mx-2">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200 mx-2">Contact</Link>
          <Link to="/terms" className="text-white hover:text-gray-200 mx-2">Terms</Link>
          <Link to="/privacy" className="text-white hover:text-gray-200 mx-2">Privacy</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-white text-teal-500 py-2 px-4 rounded hover:bg-gray-100 mx-2 focus:outline-none"
            >
              Login
              <svg
                className="ml-2 h-5 w-5 text-teal-500"
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
          <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mx-2">Register</Link>
        </nav>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-teal-500 shadow-md rounded p-4 mt-2">
          <Link to="/" className="block text-white hover:text-gray-200 mb-2">Home</Link>
          <Link to="/about" className="block text-white hover:text-gray-200 mb-2">About</Link>
          <Link to="/contact" className="block text-white hover:text-gray-200 mb-2">Contact</Link>
          <Link to="/terms" className="block text-white hover:text-gray-200 mb-2">Terms</Link>
          <Link to="/privacy" className="block text-white hover:text-gray-200 mb-2">Privacy</Link>
          <button
            onClick={toggleDropdown}
            className="w-full flex items-center bg-white text-teal-500 py-2 px-4 rounded hover:bg-gray-100 mb-2 focus:outline-none"
          >
            Login
            <svg
              className="ml-2 h-5 w-5 text-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="bg-white rounded-md shadow-lg py-1">
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
          <Link to="/register" className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Register</Link>
        </nav>
      )}
      {/* Main Content */}
      <div className="flex-1 mt-16">
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center text-teal-500 text-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg')" }}
        >
          {/* Overlay for lightening */}
          <div className="absolute inset-0 bg-white bg-opacity-50"></div>

          {/* Hero content */}
          <div className="relative z-10 p-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Nazarene Vehicle Rental</h1>
            <p className="text-xl mb-8">Rent vehicles easily and manage your bookings with us.</p>
            <Link to="/login" className="bg-teal-500 text-white py-2 px-6 rounded font-bold hover:bg-teal-600">Book a Vehicle</Link>
          </div>
        </section>

        {/* Animation Section */}
        <section className="p-8 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Ride of Your Life</h2>
          <div className="relative flex justify-center items-center h-64 bg-white shadow-md rounded-md overflow-hidden">
            <div className="car-animation">
              <img
                src="https://i.pinimg.com/474x/6c/42/d9/6c42d9ab244ad57598591323ebf0bfaf.jpg" // Use a high-resolution image
                alt="Car Animation"
                className="car-image"
              />
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="p-8 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace with your featured vehicles data */}
            {[
              { img: "https://i.pinimg.com/236x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg", name: "Vehicle 1", price: "$50/day" },
              { img: "https://i.pinimg.com/236x/1b/ff/72/1bff72806ae99a0ac6626a41b423daeb.jpg", name: "Vehicle 2", price: "$60/day" },
              { img: "https://i.pinimg.com/236x/fc/1a/45/fc1a45625468df92c1b3302452a8d497.jpg", name: "Vehicle 3", price: "$70/day" },
              { img: "https://i.pinimg.com/236x/ae/a8/67/aea8676c438d8c07d1985b9c338535da.jpg", name: "Vehicle 4", price: "$80/day" },
            ].map((vehicle, index) => (
              <div key={index} className="bg-gray-100 shadow-md rounded-md p-4 text-center">
                <img src={vehicle.img} alt={vehicle.name} className="h-40 w-full object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-teal-500 font-bold">{vehicle.price}</p>
                <Link to="/login" className="mt-4 inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Rent Now</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {[
              { name: "John Doe", feedback: "Great service and reliable vehicles!" },
              { name: "Jane Smith", feedback: "Affordable prices and excellent customer support." },
              { name: "Alice Johnson", feedback: "Highly recommend Nazarene Vehicle Rental!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4 md:mb-0 flex-1">
                <p className="italic mb-2">"{testimonial.feedback}"</p>
                <p className="font-semibold text-teal-500">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-teal-500 text-white text-center p-4 mt-auto">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Nazarene Vehicle Rental. All rights reserved.</p>
          <div className="flex justify-center mt-2">
            <Link to="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 mx-2">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 mx-2">Contact</Link>
            <Link to="/terms" className="text-white hover:text-gray-200 mx-2">Terms</Link>
            <Link to="/privacy" className="text-white hover:text-gray-200 mx-2">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
