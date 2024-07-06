import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: RootState) => state.user.user);
  return user && user.role === 'admin' ? children : <Navigate to="/login" />;
};

export default AdminRoute;
