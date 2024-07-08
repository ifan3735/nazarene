import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import ManageVehicles from '../pages/admin/ManageVehicles';
import ManageUsers from '../pages/admin/ManageUsers';
import Reports from '../pages/admin/Reports';
import ManageLocations from '../pages/admin/Locations';
import SupportTickets from '../pages/admin/SupportTickets';
import FleetManagement from '../pages/admin/FleetManagement';

// Register components to use in the charts
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Placeholder data
  const bookingsData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  const revenueData = [2000, 3000, 5000, 7000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000];

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Total Bookings',
        data: bookingsData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Revenue Generated ($)',
        data: revenueData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Total Bookings Per Month' },
    },
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Revenue Generated Per Month' },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <header className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab('overview')} className={`p-2 ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Overview
        </button>
        <button onClick={() => setActiveTab('vehicles')} className={`p-2 ${activeTab === 'vehicles' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Manage Vehicles
        </button>
        <button onClick={() => setActiveTab('users')} className={`p-2 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Manage Users
        </button>
        <button onClick={() => setActiveTab('reports')} className={`p-2 ${activeTab === 'reports' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Reports
        </button>
        <button onClick={() => setActiveTab('locations')} className={`p-2 ${activeTab === 'locations' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Locations
        </button>
        <button onClick={() => setActiveTab('support')} className={`p-2 ${activeTab === 'support' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Support Tickets
        </button>
        <button onClick={() => setActiveTab('fleet')} className={`p-2 ${activeTab === 'fleet' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}>
          Fleet Management
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Total Bookings</h2>
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Revenue Generated</h2>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      )}
      {activeTab === 'vehicles' && <ManageVehicles />}
      {activeTab === 'users' && <ManageUsers />}
      {activeTab === 'reports' && <Reports />}
      {activeTab === 'locations' && <ManageLocations />}
      {activeTab === 'support' && <SupportTickets />}
      {activeTab === 'fleet' && <FleetManagement />}
    </div>
  );
};

export default AdminDashboard;
