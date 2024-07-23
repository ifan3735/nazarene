import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useRegisterUserMutation } from '../features/LoginAPI';

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await registerUser({ name, email, password });
      console.log('User registered:', result);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-green-200 via-pink-300 to-blue-400">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-700">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-full p-4 mb-4 border border-purple-300 rounded-lg text-lg focus:ring-4 focus:ring-purple-200"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full p-4 mb-4 border border-purple-300 rounded-lg text-lg focus:ring-4 focus:ring-purple-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full p-4 mb-6 border border-purple-300 rounded-lg text-lg focus:ring-4 focus:ring-purple-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-4 rounded-lg text-lg font-bold hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
