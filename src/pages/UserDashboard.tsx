import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Loader from '../components/Loader';
import Dashboard from '../components/Dashboard';
import Discover from '../components/Discover';
import Calendar from '../components/Calender';
import Saved from '../components/Saved';
import Inbox from '../components/Inbox';
import Transactions from '../components/Transactions';
import CarReports from '../components/CarReports';
import SellYourCar from '../components/SellYourCar';
import Settings from '../components/Settings';
import Bookings from '../components/Bookings';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logout from '../components/Logout';

const UserDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [sectionLoading, setSectionLoading] = useState(false);

  useEffect(() => {
    // Simulate initial data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  const handleNavigation = (component: string) => {
    setSectionLoading(true);
    setTimeout(() => {
      setActiveComponent(component);
      setSectionLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  if (isLoading) {
    return <Loader />;
  }

  const renderComponent = () => {
    if (sectionLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <TailSpin height="80" width="80" color="#4A90E2" ariaLabel="loading" />
        </div>
      );
    }

    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Discover':
        return <Discover />;
      case 'Calendar':
        return <Calendar />;
      case 'Saved':
        return <Saved />;
      case 'Inbox':
        return <Inbox />;
      case 'Transactions':
        return <Transactions />;
      case 'CarReports':
        return <CarReports />;
      case 'SellYourCar':
        return <SellYourCar />;
      case 'Settings':
        return <Settings />;
      case 'Bookings':
        return <Bookings />;
      case 'Logout':
        return <Logout />;
      default:
        return <Dashboard />;
    }
  };

  const navLinks = [
    { id: 'Dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'Discover', label: 'Discover', icon: '🔍' },
    { id: 'Calendar', label: 'Calendar', icon: '📅' },
    { id: 'Saved', label: 'Saved', icon: '💾' },
    { id: 'Inbox', label: 'Inbox', icon: '📥' },
    { id: 'Transactions', label: 'Transactions', icon: '💸' },
    { id: 'CarReports', label: 'Car Reports', icon: '🚗' },
    { id: 'SellYourCar', label: 'Sell Your Car', icon: '🚙' },
    { id: 'Settings', label: 'Settings', icon: '⚙️' },
    { id: 'Bookings', label: 'Bookings', icon: '📖' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar for larger screens, Top nav for small screens */}
        <div className="md:w-1/4 bg-white border-r border-gray-200 p-4 flex flex-col">
          <div className="text-center mb-4">
            <img src="https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg" alt="Logo" className="h-24 w-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold mt-2">User Dashboard</h2>
          </div>
          <nav className="flex flex-col mt-6 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`flex items-center py-2 px-4 rounded-lg ${
                  activeComponent === link.id ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('Logout')}
              className="flex items-center py-2 px-4 mt-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              <span className="mr-2">🚪</span>Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 p-6 bg-gray-50 flex-1">
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
