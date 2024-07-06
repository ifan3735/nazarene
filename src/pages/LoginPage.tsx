import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/authService';
import { setUser } from '../store/userSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if (response) {
      dispatch(setUser(response.user));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
