import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';

const UserDashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {user?.full_name}</h1>
          <p className="text-gray-600 mb-4">Here you can view your bookings and manage your profile.</p>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">About Our Company</h2>
            <p className="text-gray-600 mb-4">
              Welcome to our vehicle rental service! We strive to provide you with the best experience in renting vehicles for your needs. Explore our site to find vehicles, manage your bookings, and update your profile information.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-2">How to Use Our Site</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Explore available vehicles by browsing categories or searching directly.</li>
              <li>View detailed information about each vehicle, including features, availability, and pricing.</li>
              <li>Book a vehicle by selecting your preferred dates and completing the reservation process.</li>
              <li>Manage your bookings and view your rental history from your dashboard.</li>
              <li>Update your profile information to ensure accurate communication and booking details.</li>
            </ul>
          </div>
        </div>
        
        {/* Action Button Section */}
        <div className="px-4 py-4 sm:px-6">
          <Link to="/booking" className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Book a Vehicle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
