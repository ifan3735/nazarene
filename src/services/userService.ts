import axios from 'axios';
import { User } from '../types';

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Add a new user
export const addUser = async (user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> => {
  try {
    const response = await axios.post('/api/users', user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};

// Update an existing user
export const updateUser = async (id: number, user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User | null> => {
  try {
    const response = await axios.put(`/api/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
};

// Delete a user
export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/api/users/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
