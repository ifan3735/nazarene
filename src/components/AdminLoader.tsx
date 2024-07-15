// src/components/AdminLoader.tsx
import React from 'react';

const AdminLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader bg-purple-500 p-4 rounded-full flex space-x-4">
        <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default AdminLoader;
