import React, { useState, useContext } from 'react';
import { useLoginUserMutation } from '../features/LoginAPI';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext must be used within a UserProvider');
  }

  const { setUser } = userContext;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log('Response:', response);

      if (response && response.email && response.token && response.role && response.id) {
        // Update the user context and localStorage
        setUser({
          name: response.email,
          role: response.role,
        });

        // Redirect based on user role
        navigate(response.role === 'admin' ? '/admin' : '/dashboard');
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-pink-200 to-indigo-200">
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-700">Welcome Back!</h2>
          {isError && <p className="text-red-600 mb-4 text-center">Failed to login. Please check your credentials.</p>}
          <form onSubmit={handleSubmit}>
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
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
