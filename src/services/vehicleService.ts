import axios from '../utils/axios';
import { Vehicle } from '../types';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await axios.get<Vehicle[]>('/vehicles');
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
};

export const bookVehicle = async (booking: Vehicle): Promise<void> => {
  try {
    await axios.post('/bookings', booking);
  } catch (error) {
    console.error('Error booking vehicle:', error);
  }
};

export const fetchVehicle = async (id: number): Promise<Vehicle | null> => {
  try {
    const response = await axios.get<Vehicle>(`/vehicles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    return null;
  }
};

export const addVehicle = async (vehicle: Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>): Promise<Vehicle | null> => {
  try {
    const response = await axios.post<Vehicle>('/vehicles', vehicle);
    return response.data;
  } catch (error) {
    console.error('Error adding vehicle:', error);
    return null;
  }
};

export const updateVehicle = async (id: number, vehicle: Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>): Promise<Vehicle | null> => {
  try {
    const response = await axios.put<Vehicle>(`/vehicles/${id}`, vehicle);
    return response.data;
  } catch (error) {
    console.error('Error updating vehicle:', error);
    return null;
  }
};

export const deleteVehicle = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/vehicles/${id}`);
  } catch (error) {
    console.error('Error deleting vehicle:', error);
  }
};

export const fetchVehicleDetails = async (id: number): Promise<Vehicle | null> => {
  try {
    const response = await axios.get<Vehicle>(`/vehicles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle details:', error);
    return null;
  }
}

export const checkAvailability = async (vehicleId: number, bookingDate: string, numberOfDays: number): Promise<boolean> => {
  try {
    const response = await axios.post<boolean>('/availability', { vehicleId, bookingDate, numberOfDays });
    return response.data;
  } catch (error) {
    console.error('Error checking availability:', error);
    return false;
  }
};