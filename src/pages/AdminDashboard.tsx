import { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ManageVehicles from '../pages/admin/ManageVehicles';
import ManageUsers from '../pages/admin/ManageUsers';
import Reports from '../pages/admin/Reports';
import ManageLocations from '../pages/admin/Locations';
import SupportTickets from '../pages/admin/SupportTickets';
import FleetManagement from '../pages/admin/FleetManagement';
import AdminLoader from '../components/AdminLoader';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Register components to use in the charts
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('overview');
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Simulate initial page loading
    setTimeout(() => {
      setIsPageLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  const handleNavigation = (component: string) => {
    if (component === 'logout') {
      // Handle logout and redirect to the home page
      // Perform logout logic here (e.g., clear user session or tokens)
      navigate('/'); // Redirect to home page
      return;
    }

    setIsContentLoading(true);
    setTimeout(() => {
      setActiveComponent(component);
      setIsContentLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  // Placeholder data
  const bookingsData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  const revenueData = [2000, 3000, 5000, 7000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000];

  const barChartData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
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
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
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

  if (isPageLoading) {
    return <AdminLoader />;
  }

  const renderComponent = () => {
    if (isContentLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="loader bg-blue-500 p-4 rounded-full flex space-x-4">
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      );
    }

    switch (activeComponent) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-4">Total Bookings</h2>
              <Bar data={barChartData} options={barChartOptions} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-4">Revenue Generated</h2>
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
        );
      case 'vehicles':
        return <ManageVehicles />;
      case 'users':
        return <ManageUsers />;
      case 'reports':
        return <Reports />;
      case 'locations':
        return <ManageLocations />;
      case 'support':
        return <SupportTickets />;
      case 'fleet':
        return <FleetManagement />;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  const navLinks = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'vehicles', label: 'Manage Vehicles', icon: '🚗' },
    { id: 'users', label: 'Manage Users', icon: '👥' },
    { id: 'reports', label: 'Reports', icon: '📑' },
    { id: 'locations', label: 'Locations', icon: '📍' },
    { id: 'support', label: 'Support Tickets', icon: '🛠️' },
    { id: 'fleet', label: 'Fleet Management', icon: '🚚' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-blue-800 border-r border-gray-200 p-4 flex flex-col text-white">
          <div className="text-center mb-4">
            <img src="https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg" alt="Logo" className="h-24 w-24 mx-auto rounded-full" />
            <h2 className="text-2xl font-bold mt-2">Admin Dashboard</h2>
          </div>
          <nav className="flex flex-col mt-6 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`flex items-center py-2 px-4 rounded-lg ${
                  activeComponent === link.id ? 'bg-blue-600 text-white' : 'hover:bg-blue-700'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('logout')}
              className="flex items-center py-2 px-4 mt-auto bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              <span className="mr-2">🚪</span>Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6 bg-gray-50">
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
