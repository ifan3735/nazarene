import axios from 'axios';
import { AuthCredentials, AuthResponse, User } from '../types';

export const loginUser = async (credentials: AuthCredentials): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const registerUser = async (user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>('/api/auth/register', user);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    return null;
  }
};

export const adminLogin = async (credentials: AuthCredentials): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>('/api/auth/admin-login', credentials);
    return response.data;
  } catch (error) {
    console.error('Admin login error:', error);
    return null;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await axios.post('/api/auth/logout');
  } catch (error) {
    console.error('Logout error:', error);
  }
};