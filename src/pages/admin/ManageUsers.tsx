import React, { useState } from 'react';
import {
  useFetchAllUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useAddUserMutation
} from '../../features/LoginAPI';
import { User, UserRole } from '../../types';

// If UserRole is not defined in '../../types', define it here
// type UserRole = 'user' | 'admin';

// If User is not defined in '../../types', define it here
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   contact_phone: string;
//   address: string;
//   role: UserRole;
//   created_at: string;
//   updated_at: string;
// }

const ManageUsers: React.FC = () => {
  const { data: users = [], refetch } = useFetchAllUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const initialNewUserState: Omit<User, 'id' | 'created_at' | 'updated_at'> = {
    name: '',
    email: '',
    contact_phone: '',
    address: '',
    role: 'user' as UserRole,
  };

  const [newUser, setNewUser] = useState<Omit<User, 'id' | 'created_at' | 'updated_at'>>(initialNewUserState);

  const handleAddUser = async () => {
    try {
      const addedUser = await addUser({ ...newUser, id: 0, token: '' }).unwrap();
      if (addedUser) {
        setNewUser(initialNewUserState);
        refetch();
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setNewUser({
      name: user.name,
      email: user.email,
      contact_phone: user.contact_phone,
      address: user.address,
      role: user.role,
    });
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    if (selectedUser) {
      try {
        const updatedUser = await updateUser({ id: selectedUser.id, ...newUser }).unwrap();
        if (updatedUser !== undefined) {
          setSelectedUser(null);
          setNewUser(initialNewUserState);
          setIsEditing(false);
          refetch();
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
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
            {users.map((user: User) => (
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
