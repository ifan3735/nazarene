import React, { useState } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Olivia Deny',
    email: 'oliviadeny01@gmail.com',
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Manage your account settings.</p>
      </div>

      {/* Profile Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h2>
        <form className="space-y-4">
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
          <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Save Changes
          </button>
        </form>
      </div>

      {/* Password Change */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Change Password</h2>
        <form className="space-y-4">
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
          <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Change Password
          </button>
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
          <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
