import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Nazarene Vehicle Rental</div>
        <nav>
          <Link to="/login" className="text-blue-500 hover:underline mx-2">Login</Link>
          <Link to="/register" className="text-blue-500 hover:underline mx-2">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center p-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nazarene Vehicle Rental Global Company </h1>
        <p className="text-xl mb-8">Rent vehicles easily and manage your bookings with us.</p>
        <Link to="/booking" className="bg-white text-blue-600 py-2 px-4 rounded font-bold">Book a Vehicle</Link>
      </section>

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
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our company provides an easy-to-use vehicle rental service. We offer a wide range of vehicles for all your needs. Whether you need a car for a day or a month, we have you covered. Our goal is to provide top-notch service and ensure customer satisfaction.
        </p>
        <Link to="/about" className="text-blue-500 hover:underline mt-4 block">Learn more</Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Vehicle Rental. All rights reserved.</p>
        <nav>
          <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact Us</Link>
          <Link to="/terms" className="text-blue-400 hover:underline mx-2">Terms of Service</Link>
          <Link to="/privacy" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link>
        </nav>
      </footer>
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
];

export default LandingPage;
