// src/components/UserDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
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
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserDashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const renderComponent = () => {
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
      default:
        return <Dashboard />;
    }
  };

  const navLinks = [
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'Discover', label: 'Discover' },
    { id: 'Calendar', label: 'Calendar' },
    { id: 'Saved', label: 'Saved' },
    { id: 'Inbox', label: 'Inbox' },
    { id: 'Transactions', label: 'Transactions' },
    { id: 'CarReports', label: 'Car Reports' },
    { id: 'SellYourCar', label: 'Sell Your Car' },
    { id: 'Settings', label: 'Settings' },
  ];

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-300 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-white border-r border-gray-200 p-4">
            <div className="mb-4">
              <img src="https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg" alt="Logo" className="h-20 w-20 mx-auto" />
            </div>
            <nav className="flex flex-col">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => setActiveComponent(link.id)}
                  className={`py-2 px-4 mb-2 rounded-lg ${
                    activeComponent === link.id ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-6">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default UserDashboard;
