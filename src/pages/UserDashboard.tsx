import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { FaCar, FaEdit, FaHistory, FaUserCircle } from 'react-icons/fa';

const UserDashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);

  // Example data for bookings (replace with actual data or API calls)
  const bookings = [
    { id: 1, vehicle: 'Toyota Camry', startDate: '2024-07-07', endDate: '2024-07-10' },
    { id: 2, vehicle: 'Honda Civic', startDate: '2024-07-15', endDate: '2024-07-18' },
    // Add more bookings as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Welcome Section */}
        <div className="px-6 py-8 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome, {user?.full_name}</h1>
          <p className="text-lg mb-4">Manage your bookings and profile with ease.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-around bg-gray-200 p-4">
          <Link to="/booking" className="text-blue-600 hover:underline flex flex-col items-center">
            <FaCar size={24} />
            <span className="mt-1">Book a Vehicle</span>
          </Link>
          <Link to="/history" className="text-blue-600 hover:underline flex flex-col items-center">
            <FaHistory size={24} />
            <span className="mt-1">Booking History</span>
          </Link>
          <Link to="/profile" className="text-blue-600 hover:underline flex flex-col items-center">
            <FaUserCircle size={24} />
            <span className="mt-1">Profile</span>
          </Link>
          <Link to="/edit-profile" className="text-blue-600 hover:underline flex flex-col items-center">
            <FaEdit size={24} />
            <span className="mt-1">Edit Profile</span>
          </Link>
        </div>

        {/* Bookings Section */}
        <div className="px-6 py-6 border-t border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Bookings</h2>
          <div className="space-y-4">
            {bookings.length > 0 ? (
              bookings.map(booking => (
                <div key={booking.id} className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Booking ID: {booking.id}</p>
                    <p className="text-gray-600">Vehicle: {booking.vehicle}</p>
                    <p className="text-gray-600">Dates: {booking.startDate} to {booking.endDate}</p>
                  </div>
                  <Link to={`/booking-details/${booking.id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-600 py-4">You have no bookings yet.</p>
            )}
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="px-6 py-6 border-t border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <p className="text-gray-800 font-semibold w-1/3">Full Name:</p>
              <p className="text-gray-600 w-2/3">{user?.full_name}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-800 font-semibold w-1/3">Email:</p>
              <p className="text-gray-600 w-2/3">{user?.email}</p>
            </div>
            {/* Add more fields as needed */}
            <Link to="/edit-profile" className="text-blue-500 hover:underline">Edit Profile</Link>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="px-6 py-6 border-t border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Company</h2>
          <p className="text-gray-600 mb-4">
            We provide a seamless vehicle rental experience with a variety of options to suit your needs. Whether for business or leisure, our fleet of well-maintained vehicles ensures you travel in comfort and style.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use Our Site</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Browse our vehicle categories to find the perfect match for your requirements.</li>
            <li>Book a vehicle by choosing your desired dates and completing the reservation.</li>
            <li>View and manage your bookings directly from your dashboard.</li>
            <li>Keep your profile information up-to-date for smooth communication and service.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
