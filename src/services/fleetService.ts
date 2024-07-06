import axios from '../utils/axios';
import { FleetManagement } from '../types';

// Fetch all fleet details
export const fetchFleet = async (): Promise<FleetManagement[]> => {
  try {
    const response = await axios.get('/api/fleet');
    return response.data;
  } catch (error) {
    console.error('Error fetching fleet:', error);
    return [];
  }
};

// Add a new vehicle to the fleet
export const addFleetVehicle = async (vehicle: Omit<FleetManagement, 'id' | 'created_at' | 'updated_at'>): Promise<FleetManagement | null> => {
  try {
    const response = await axios.post('/api/fleet', vehicle);
    return response.data;
  } catch (error) {
    console.error('Error adding fleet vehicle:', error);
    return null;
  }
};

// Update an existing fleet vehicle
export const updateFleetVehicle = async (id: number, vehicle: Omit<FleetManagement, 'id' | 'created_at' | 'updated_at'>): Promise<FleetManagement | null> => {
  try {
    const response = await axios.put(`/api/fleet/${id}`, vehicle);
    return response.data;
  } catch (error) {
    console.error('Error updating fleet vehicle:', error);
    return null;
  }
};

// Delete a fleet vehicle
export const deleteFleetVehicle = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/api/fleet/${id}`);
  } catch (error) {
    console.error('Error deleting fleet vehicle:', error);
  }
};
