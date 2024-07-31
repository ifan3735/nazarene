import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
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
import AdminLogin from './pages/AdminLogin';
import Bookings from './components/Bookings';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<UserDashboard />} role="user" />} />
        <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} role="admin" />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/vehicles" element={<ProtectedRoute element={<ManageVehicles />} role="admin" />} />
        <Route path="/admin/users" element={<ProtectedRoute element={<ManageUsers />} role="admin" />} />
        <Route path="/admin/reports" element={<ProtectedRoute element={<Reports />} role="admin" />} />
        <Route path="/admin/locations" element={<ProtectedRoute element={<Locations />} role="admin" />} />
        <Route path="/admin/support-tickets" element={<ProtectedRoute element={<SupportTickets />} role="admin" />} />
        <Route path="/admin/fleet-management" element={<ProtectedRoute element={<FleetManagement />} role="admin" />} />
        <Route path="/booking/:id" element={<VehicleBooking />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
