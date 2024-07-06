import axios from '../utils/axios';
import { Location } from '../types';

// Fetch all locations
export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const response = await axios.get('/api/locations');
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};

// Add a new location
export const addLocation = async (location: Omit<Location, 'id' | 'created_at' | 'updated_at'>): Promise<Location | null> => {
  try {
    const response = await axios.post('/api/locations', location);
    return response.data;
  } catch (error) {
    console.error('Error adding location:', error);
    return null;
  }
};

// Update an existing location
export const updateLocation = async (id: number, location: Omit<Location, 'id' | 'created_at' | 'updated_at'>): Promise<Location | null> => {
  try {
    const response = await axios.put(`/api/locations/${id}`, location);
    return response.data;
  } catch (error) {
    console.error('Error updating location:', error);
    return null;
  }
};

// Delete a location
export const deleteLocation = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/api/locations/${id}`);
  } catch (error) {
    console.error('Error deleting location:', error);
  }
};
