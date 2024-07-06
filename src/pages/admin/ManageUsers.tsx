import React, { useState, useEffect } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../../services/userService';
import { User, UserRole } from '../../types';

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<Omit<User, 'id' | 'created_at' | 'updated_at'>>({
    full_name: '',
    email: '',
    contact_phone: '',
    address: '',
    role: 'user',
  });

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetchUsers();
      setUsers(response);
    };
    loadUsers();
  }, []);

  const handleAddUser = async () => {
    const addedUser = await addUser(newUser);
    if (addedUser) {
      setUsers([...users, addedUser]);
      setNewUser({
        full_name: '',
        email: '',
        contact_phone: '',
        address: '',
        role: 'user',
      });
    }
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setNewUser({
      full_name: user.full_name,
      email: user.email,
      contact_phone: user.contact_phone,
      address: user.address,
      role: user.role,
    });
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      const updated = await updateUser(selectedUser.id, newUser);
      if (updated) {
        setUsers(users.map(user => (user.id === selectedUser.id ? { ...user, ...newUser } : user)));
        setSelectedUser(null);
        setNewUser({
          full_name: '',
          email: '',
          contact_phone: '',
          address: '',
          role: 'user',
        });
        setIsEditing(false);
      }
    }
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit User' : 'Add New User'}</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full p-2 mb-3 border rounded"
            value={newUser.full_name}
            onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-3 border rounded"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact Phone"
            className="block w-full p-2 mb-3 border rounded"
            value={newUser.contact_phone}
            onChange={(e) => setNewUser({ ...newUser, contact_phone: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="block w-full p-2 mb-3 border rounded"
            value={newUser.address}
            onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
            required
          />
          <select
            className="block w-full p-2 mb-3 border rounded"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value as UserRole })}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={isEditing ? handleUpdateUser : handleAddUser}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update User' : 'Add User'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} className="flex justify-between items-center mb-2">
              <span>{user.full_name} - {user.email} ({user.role})</span>
              <div>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageUsers;
