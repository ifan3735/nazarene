import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

const RegisterPage = () => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await registerUser({ full_name, email, password, role: 'user' });
    if (response) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full p-2 mb-3 border rounded"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
