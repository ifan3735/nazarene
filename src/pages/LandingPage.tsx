import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginPage';
import RegisterForm from './RegisterPage';
import ContactForm from './ContactPage';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState<'login' | 'register' | 'contact' | null>(null);

  const [userRole, setUserRole] = useState<string | null>(null);

  React.useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role) setUserRole(role);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full fixed top-0 z-10">
        <div className="flex items-center">
        <div className="h-20 w-20 bg-cover bg-center mr-2" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}></div>
          <div className="text-3xl font-bold">Nazarene Vehicle Rental</div>
        </div>
        <nav className="flex items-center">
          <Link to="/" className="text-blue-500 hover:underline mx-2">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline mx-2">About</Link>
          <button className="text-blue-500 hover:underline mx-2" onClick={() => setActiveSection('contact')}>Contact</button>
          <Link to="/terms" className="text-blue-500 hover:underline mx-2">Terms</Link>
          <Link to="/privacy" className="text-blue-500 hover:underline mx-2">Privacy</Link>
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
        {!userRole && (
          <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Login Options</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-white p-6 rounded shadow-md flex-1 max-w-xs">
                <h3 className="text-xl font-semibold mb-4">User Login</h3>
                <p className="text-gray-700 mb-4">Log in to manage your bookings and view your rental history.</p>
                <button onClick={() => setActiveSection('login')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">User Login</button>
              </div>
              <div className="bg-white p-6 rounded shadow-md flex-1 max-w-xs">
                <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
                <p className="text-gray-700 mb-4">Log in to manage the vehicle fleet, bookings, and users.</p>
                <button onClick={() => setActiveSection('login')} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Admin Login</button>
              </div>
              <div className="bg-white p-6 rounded shadow-md flex-1 max-w-xs">
                <h3 className="text-xl font-semibold mb-4">Register</h3>
                <p className="text-gray-700 mb-4">Sign up to start booking vehicles.</p>
                <button onClick={() => setActiveSection('register')} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">Register</button>
              </div>
            </div>
          </section>
        )}

        {/* Display Forms Based on Active Section */}
        {activeSection === 'login' && (
          <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <LoginForm />
            <button onClick={() => setActiveSection(null)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Back</button>
          </section>
        )}
        {activeSection === 'register' && (
          <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <RegisterForm />
            <button onClick={() => setActiveSection(null)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Back</button>
          </section>
        )}
        {activeSection === 'contact' && (
          <section className="p-8 bg-gray-200 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <ContactForm />
            <button onClick={() => setActiveSection(null)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Back</button>
          </section>
        )}

        {/* Featured Vehicles */}
        <section className="p-8 bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredVehicles.map((vehicle, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.description}</p>
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

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto flex flex-col items-center justify-center px-4">
            {/* Copyright and Links */}
            <div className="text-center mb-4">
              <p className="text-sm">&copy; {new Date().getFullYear()} Nazarene Vehicle Rental. All rights reserved.</p>
              <nav className="mt-2">
                <button className="text-blue-400 hover:underline mx-2" onClick={() => setActiveSection('contact')}>Contact Us</button>
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

// Sample featured vehicles data
const featuredVehicles = [
  {
    image: 'https://i.pinimg.com/236x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg',
    name: 'Toyota Camry',
    description: 'Comfortable and reliable sedan.',
  },
  {
    image: 'https://i.pinimg.com/236x/21/45/9e/21459e2d2d426235204a9ae1b1e59e80.jpg',
    name: 'Ford Explorer',
    description: 'Spacious and powerful SUV.',
  },
  {
    image: 'https://i.pinimg.com/236x/5c/b9/04/5cb9048f80b13be05bd382874f2e5a93.jpg',
    name: 'Honda Civic',
    description: 'Fuel-efficient and compact car.',
  },
  {
    image: 'https://i.pinimg.com/236x/1f/5a/e0/1f5ae0bbe38816370f21dfb86412d7c2.jpg',
    name: 'Chevrolet Tahoe',
    description: 'Full-size SUV with great performance.',
  },
  {
    image: 'https://i.pinimg.com/474x/78/7a/d4/787ad43e36ec9e2584638c45636fa043.jpg',
    name: 'Jeep Wrangler',
    description: 'Off-road capable and rugged SUV.',
  },
  {
    image: 'https://i.pinimg.com/474x/5a/e7/9e/5ae79efba7f9aca7efdff1b079bf1ef7.jpg',
    name: 'Nissan Altima',
    description: 'Reliable and stylish sedan.',
  },
  {
    image: 'https://i.pinimg.com/474x/76/90/40/769040bea0bde14efa0118b3973f1f1e.jpg',
    name: 'Ford F-150',
    description: 'Powerful and versatile pickup truck.',
  },
  {
    image: 'https://i.pinimg.com/474x/68/39/44/6839446796e1d1cfdaee9aceace52145.jpg',
    name: 'Toyota RAV4',
    description: 'Compact SUV with great fuel economy.',
  }
];

export default LandingPage;
