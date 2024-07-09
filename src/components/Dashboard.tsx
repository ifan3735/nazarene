import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July, August, September, October, November, December'],
    datasets: [
      {
        label: 'Turnover',
        data: [12000, 19000, 3000, 5000, 20000, 30000, 45000, 50000, 60000, 70000, 80000, 90000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {/* User Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Olivia!</h1>
        <p className="text-gray-600">Here’s what’s happening with your account today.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Turnover</h2>
          <p className="text-gray-600 text-3xl">$14,492.21</p>
          <p className="text-green-500">+45% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Income</h2>
          <p className="text-gray-600 text-3xl">$74,352.53</p>
          <p className="text-green-500">+72% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Expenses</h2>
          <p className="text-gray-600 text-3xl">$7,592.84</p>
          <p className="text-red-500">-12% from last month</p>
        </div>
      </div>

      {/* Graphical Data Representation */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Turnover Trends</h2>
        <div className="h-64">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4">
            <p className="text-gray-800 font-semibold">Booking #1234</p>
            <p className="text-gray-600">You booked a Honda Brio for 3 days.</p>
          </li>
          <li className="py-4">
            <p className="text-gray-800 font-semibold">Payment Received</p>
            <p className="text-gray-600">$500 received for your recent rental.</p>
          </li>
          <li className="py-4">
            <p className="text-gray-800 font-semibold">New Inquiry</p>
            <p className="text-gray-600">Someone is interested in your Toyota Agya.</p>
          </li>
        </ul>
      </div>

      {/* Car Listings */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Car Listings</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">Client Name</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">Car Type</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-800">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Liam Johnson</td>
              <td className="py-2 px-4 border-b border-gray-200">Honda Brio</td>
              <td className="py-2 px-4 border-b border-gray-200 text-green-500">Ongoing</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Noah Anderson</td>
              <td className="py-2 px-4 border-b border-gray-200">Pajero Sport</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-500">Finished</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Ethan Smith</td>
              <td className="py-2 px-4 border-b border-gray-200">Toyota Agya</td>
              <td className="py-2 px-4 border-b border-gray-200 text-gray-500">Finished</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">Book a Car</button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
