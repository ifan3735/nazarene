// src/components/Logout.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Logging out...</h1>
    </div>
  );
};

export default Logout;
