// src/components/ManageUsers.tsx
import React, { useState, useEffect } from 'react';
import { useFetchAllUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from '../../features/LoginAPI';
import { User, UserRole } from '../../types';

const ManageUsers: React.FC = () => {
  const { data: users, refetch } = useFetchAllUsersQuery();
  console.log(users);
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<Omit<User, 'id' | 'created_at' | 'updated_at'>>({
    name: '',
    email: '',
    contact_phone: '',
    address: '',
    role: 'user' as UserRole,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleAddUser = async () => {
    const addedUser = await addUser(newUser).unwrap();
    if (addedUser) {
      setNewUser({
        name: '',
        email: '',
        contact_phone: '',
        address: '',
        role: 'user' as UserRole,
      });
      refetch();
    }
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setNewUser({
      name: user.name,
      email: user.email,
      contact_phone: user.contact_phone,
      address: user.address,
      role: user.role as UserRole,
    });
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      const updated = await updateUser({ id: selectedUser.id, user: newUser }).unwrap();
      if (updated) {
        setSelectedUser(null);
        setNewUser({
          name: '',
          email: '',
          contact_phone: '',
          address: '',
          role: 'user' as UserRole,
        });
        setIsEditing(false);
        refetch();
      }
    }
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id).unwrap();
    refetch();
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
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
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
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Contact Phone</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.contact_phone}</td>
                <td className="py-2 px-4 border-b">{user.address}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.created_at}</td>
                <td className="py-2 px-4 border-b">{user.updated_at}</td>
                <td className="py-2 px-4 border-b">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
