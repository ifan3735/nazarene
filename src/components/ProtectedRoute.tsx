import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ element: Component, role }: { element: JSX.Element, role: string }) => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <Navigate to="/" />;
  }

  const { user } = userContext;

  // Redirect if user is not logged in or role does not match
  if (!user || user.role !== role) {
    return <Navigate to={user?.role === 'admin' ? '/admin' : '/dashboard'} />;
  }

  return Component;
};

export default ProtectedRoute;
