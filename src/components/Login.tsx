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

      if (response && response.user && response.token) {
        // Update the user context and localStorage
        setUser({
          name: response.user.name,
          role: response.user.role,
        });

        // Redirect based on user role
        navigate(response.user.role === 'admin' ? '/admin' : '/dashboard');
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
      <main className="flex-1 flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          {isError && <p className="text-red-500 mb-4">Failed to login. Please check your credentials.</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="block w-full p-4 mb-4 border rounded text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full p-4 mb-6 border rounded text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-4 rounded text-lg font-bold hover:bg-blue-600"
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
