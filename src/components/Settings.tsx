import React, { useState, useEffect } from 'react';
import {
  useFetchOneUserQuery,
  useUpdateUserMutation,
  useUpdateUserPasswordMutation,
} from '../features/LoginAPI';

const Settings = () => {
  const id = localStorage.getItem('userId');
  const userId = id ? Number(id) : null;

  const { data: user, isLoading: isUserLoading, isError: isUserError, error: userError } = useFetchOneUserQuery(userId!, { skip: !userId });

  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [updateProfile, { isLoading: isProfileLoading }] = useUpdateUserMutation();
  const [changePassword, { isLoading: isPasswordLoading, isError: isPasswordError, error: passwordError }] = useUpdateUserPasswordMutation();

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProfile({ id: userId!, user: profile }).unwrap();
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      alert('New password and confirmation do not match');
      return;
    }
    try {
      const response = await changePassword({
        id: userId!,
        currentPassword: password.currentPassword,
        newPassword: password.newPassword,
      }).unwrap();
      alert('Password changed successfully');
      console.log('Password change response:', response);
    } catch (error) {
      console.error('Error changing password:', error);
      if (passwordError?.data?.message) {
        alert(`Error changing password: ${passwordError.data.message}`);
      } else {
        alert('Error changing password. Please check your current password and try again.');
      }
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isUserError) {
    console.error('Error fetching user:', userError);
    return <div>Error loading user data</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account settings.</p>
      </div>

      {/* Profile Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h2>
        <form className="space-y-4" onSubmit={handleProfileSubmit}>
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className={`bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 ${
              isProfileLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isProfileLoading}
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password Change */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Change Password</h2>
        <form className="space-y-4" onSubmit={handlePasswordSubmit}>
          <div>
            <label className="block text-gray-600">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={password.currentPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-600">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className={`bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 ${
              isPasswordLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isPasswordLoading}
          >
            Change Password
          </button>
          {isPasswordError && <div className="text-red-500 mt-2">{passwordError?.data?.message || 'Error changing password'}</div>}
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Notification Settings</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notifications.emailNotifications}
              onChange={handleNotificationsChange}
              className="h-4 w-4 text-purple-600"
            />
            <label className="ml-2 text-gray-600">Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="smsNotifications"
              checked={notifications.smsNotifications}
              onChange={handleNotificationsChange}
              className="h-4 w-4 text-purple-600"
            />
            <label className="ml-2 text-gray-600">SMS Notifications</label>
          </div>
          <button
            type="submit"
            className={`bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700`}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
