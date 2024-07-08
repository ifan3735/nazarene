import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { adminLogin } from '../services/authService'; // Adjust the import based on your actual service file

const AdminLogin = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await adminLogin({ email, password });
      if (response.token) {
        localStorage.setItem('userRole', 'admin'); // Store user role as 'admin'
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/236x/59/25/32/5925328a9e43512728be60afa9f4086c.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Admin Login</h1>
          <p className="text-gray-500">Sign in to manage the system</p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email;"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 flex items-center justify-center"
          >
            <FiLogIn className="mr-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
