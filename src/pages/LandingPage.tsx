import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full top-0 z-10">
        <div className="flex items-center">
        <div className="h-20 w-20 bg-cover bg-center mr-2" style={{ backgroundImage: 'url("https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg")' }}></div>
          <div className="text-3xl font-bold">Nazarene Vehicle Rental</div>
        </div>
        <nav className="flex items-center">
          <Link to="/" className="text-blue-500 hover:underline mx-2">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline mx-2">About</Link>
          <Link to="/contact" className="text-blue-500 hover:underline mx-2">Contact</Link>
          <Link to="/terms" className="text-blue-500 hover:underline mx-2">Terms</Link>
          <Link to="/privacy" className="text-blue-500 hover:underline mx-2">Privacy</Link>
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
            <Link to="/booking" className="bg-white text-blue-600 py-2 px-4 rounded font-bold hover:bg-gray-200">Book a Vehicle</Link>
          </div>
        </section>

        {/* Login Options */}
        <section className="p-8 bg-gray-200 text-center">
          <h2 className="text-3xl font-bold mb-6">Login Options</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded shadow-md flex-1 max-w-xs">
              <h3 className="text-xl font-semibold mb-4">User Login</h3>
              <p className="text-gray-700 mb-4">Log in to manage your bookings and view your rental history.</p>
              <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">User Login</Link>
            </div>
            <div className="bg-white p-6 rounded shadow-md flex-1 max-w-xs">
              <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
              <p className="text-gray-700 mb-4">Log in to manage the vehicle fleet, bookings, and users.</p>
              <Link to="/admin-login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Admin Login</Link>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="p-8 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Replace with your featured vehicles data */}
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/236x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg" alt="Toyota Camry" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Toyota Camry</h3>
              <p className="text-gray-600">Comfortable and reliable sedan.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/236x/21/45/9e/21459e2d2d426235204a9ae1b1e59e80.jpg" alt="Ford Explorer" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Ford Explorer</h3>
              <p className="text-gray-600">Spacious and powerful SUV.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/236x/5c/b9/04/5cb9048f80b13be05bd382874f2e5a93.jpg" alt="Honda Civic" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Honda Civic</h3>
              <p className="text-gray-600">Fuel-efficient and compact car.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/236x/1f/5a/e0/1f5ae0bbe38816370f21dfb86412d7c2.jpg" alt="Chevrolet Tahoe" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Chevrolet Tahoe</h3>
              <p className="text-gray-600">Full-size SUV with great performance.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/474x/78/7a/d4/787ad43e36ec9e2584638c45636fa043.jpg" alt="Jeep Wrangler" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Jeep Wrangler</h3>
              <p className="text-gray-600">Off-road capable and rugged SUV.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/474x/5a/e7/9e/5ae79efba7f9aca7efdff1b079bf1ef7.jpg" alt="Nissan Altima" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Nissan Altima</h3>
              <p className="text-gray-600">Reliable and stylish sedan.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/474x/76/90/40/769040bea0bde14efa0118b3973f1f1e.jpg" alt="Ford F-150" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Ford F-150</h3>
              <p className="text-gray-600">Powerful and versatile pickup truck.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <img src="https://i.pinimg.com/474x/68/39/44/6839446796e1d1cfdaee9aceace52145.jpg" alt="Toyota RAV4" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">Toyota RAV4</h3>
              <p className="text-gray-600">Compact SUV with great fuel economy.</p>
            </div>
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
    </div>
  );
};

export default LandingPage;
