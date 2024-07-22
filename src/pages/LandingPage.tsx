import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css';  

const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full top-0 z-10">
        <div className="flex items-center">
          <div className="h-20 w-20 bg-cover bg-center mr-2 rounded-full border-2 border-blue-500" style={{ backgroundImage: 'url("https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg")' }}></div>
          <div className="text-3xl font-bold text-blue-500">Nazarene Vehicle Rental</div>
        </div>
        <nav className="flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-500 mx-2">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 mx-2">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 mx-2">Contact</Link>
          <Link to="/terms" className="text-gray-700 hover:text-blue-500 mx-2">Terms</Link>
          <Link to="/privacy" className="text-gray-700 hover:text-blue-500 mx-2">Privacy</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mx-2 focus:outline-none"
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
          <Link to="/register" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mx-2">Register</Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 mt-16">
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center text-white text-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/736x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg')" }}
        >
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Hero content */}
          <div className="relative z-10 p-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Nazarene Vehicle Rental</h1>
            <p className="text-xl mb-8">Rent vehicles easily and manage your bookings with us.</p>
            <Link to="/bookings" className="bg-blue-500 text-white py-2 px-6 rounded font-bold hover:bg-blue-600">Book a Vehicle</Link>
          </div>
        </section>

        {/* Animation Section */}
        <section className="p-8 bg-gray-200 text-center">
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
        <section className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace with your featured vehicles data */}
            {[
              { img: "https://i.pinimg.com/236x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg", name: "Toyota Camry", desc: "Comfortable and reliable sedan." },
              { img: "https://i.pinimg.com/236x/21/45/9e/21459e2d2d426235204a9ae1b1e59e80.jpg", name: "Ford Explorer", desc: "Spacious and powerful SUV." },
              { img: "https://i.pinimg.com/236x/5c/b9/04/5cb9048f80b13be05bd382874f2e5a93.jpg", name: "Honda Civic", desc: "Fuel-efficient and compact car." },
              { img: "https://i.pinimg.com/236x/1f/5a/e0/1f5ae0bbe38816370f21dfb86412d7c2.jpg", name: "Chevrolet Tahoe", desc: "Full-size SUV with great performance." },
              { img: "https://i.pinimg.com/474x/78/7a/d4/787ad43e36ec9e2584638c45636fa043.jpg", name: "Jeep Wrangler", desc: "Off-road capable and rugged SUV." },
              { img: "https://i.pinimg.com/474x/5a/e7/9e/5ae79efba7f9aca7efdff1b079bf1ef7.jpg", name: "Nissan Altima", desc: "Reliable and stylish sedan." },
              { img: "https://i.pinimg.com/474x/76/90/40/769040bea0bde14efa0118b3973f1f1e.jpg", name: "Ford F-150", desc: "Powerful and versatile pickup truck." },
              { img: "https://i.pinimg.com/474x/68/39/44/6839446796e1d1cfdaee9aceace52145.jpg", name: "Toyota RAV4", desc: "Compact SUV with great fuel economy." },
            ].map(vehicle => (
              <div key={vehicle.name} className="bg-white p-4 rounded shadow-md">
                <img src={vehicle.img} alt={vehicle.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Us */}
        <section
          className="relative p-8 bg-cover bg-center text-white text-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/236x/06/39/26/0639268d2dad7274ed7fa13f586a2572.jpg')" }}
        >
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our company provides an easy-to-use vehicle rental service. We offer a wide range of vehicles for all your needs.
              Whether you need a car for a day or a month, we have you covered. Our goal is to provide top-notch service and
              ensure customer satisfaction.
            </p>
            <Link to="/about" className="text-blue-300 hover:underline mt-4 block">Learn more</Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-center px-4">
          {/* Copyright and Links */}
          <div className="text-center mb-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Nazarene Vehicle Rental. All rights reserved.</p>
            <nav className="mt-2">
              <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact Us</Link>
              <Link to="/terms" className="text-blue-400 hover:underline mx-2">Terms of Service</Link>
              <Link to="/privacy" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
