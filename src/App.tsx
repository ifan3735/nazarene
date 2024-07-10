import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import VehicleBooking from './pages/VehicleBooking';
import ManageVehicles from './pages/admin/ManageVehicles';
import ManageUsers from './pages/admin/ManageUsers';
import Reports from './pages/admin/Reports';
import Locations from './pages/admin/Locations';
import SupportTickets from './pages/admin/SupportTickets';
import FleetManagement from './pages/admin/FleetManagement';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdminLogin from './pages/AdminLogin'; // Add the import


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin-login" element={<AdminLogin />} /> {/* Add the route */}
      <Route path="/admin/vehicles" element={<ManageVehicles />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/locations" element={<Locations />} />
      <Route path="/admin/support-tickets" element={<SupportTickets />} />
      <Route path="/admin/fleet-management" element={<FleetManagement />} />
      <Route path="/booking" element={<VehicleBooking />} />
    </Routes>
  );
};

export default App;
