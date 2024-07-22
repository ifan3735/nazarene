// src/components/Logout.tsx
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');

    // Set a timeout to redirect after a few seconds
    const timer = setTimeout(() => {
      // Redirect to home page
      navigate('/');
    }, 2000); // Adjust the timeout duration as needed (2000ms = 2 seconds)

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Logging out...</h1>
    </div>
  );
};

export default Logout;
