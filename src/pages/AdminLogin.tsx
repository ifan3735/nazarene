import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';// Adjust the import based on your actual service file
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoginUserMutation } from '../features/LoginAPI';

const AdminLogin = () => {
  const [adminLogin] = useLoginUserMutation();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await adminLogin({ email, password });
    if (response) {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/236x/59/25/32/5925328a9e43512728be60afa9f4086c.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md z-10 mt-20"> {/* Added top margin */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Admin Login</h1>
          <p className="text-gray-500">Sign in to manage the system</p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <FiLogIn className="mr-2" />
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminLogin;
