import React from 'react';
import { User } from '../types';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h2>{user.full_name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.contact_phone}</p>
    </div>
  );
};

export default UserProfile;
