import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/admin/vehicles" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Manage Vehicles</Link>
        <Link to="/admin/users" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Manage Users</Link>
        <Link to="/admin/reports" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">View Reports</Link>
        <Link to="/admin/locations" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Manage Locations</Link>
        <Link to="/admin/support-tickets" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Support Tickets</Link>
        <Link to="/admin/fleet-management" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Fleet Management</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
