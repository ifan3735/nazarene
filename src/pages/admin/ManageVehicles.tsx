import React, { useState } from 'react';
import {
  useFetchAllVehiclesQuery,
  useAddVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation
} from '../../features/LoginAPI';
import { Vehicle } from '../../types';

const ManageVehicles: React.FC = () => {
  const { data: vehicles = [], refetch } = useFetchAllVehiclesQuery();
  const [addVehicle] = useAddVehicleMutation();
  const [updateVehicle] = useUpdateVehicleMutation();
  const [deleteVehicle] = useDeleteVehicleMutation();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newVehicle, setNewVehicle] = useState<Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>>({
    vehicle_spec_id: 0,
    availability: 'available',
  });

  const handleAddVehicle = async () => {
    try {
      const addedVehicle = await addVehicle(newVehicle).unwrap();
      if (addedVehicle) {
        setNewVehicle({
          vehicle_spec_id: 0,
          availability: 'available',
        });
        refetch(); // Optionally refetch data to get the latest from server
      }
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setNewVehicle({
      vehicle_spec_id: vehicle.vehicle_spec_id,
      availability: vehicle.availability,
    });
    setIsEditing(true);
  };

  const handleUpdateVehicle = async () => {
    if (selectedVehicle) {
      try {
        const updated = await updateVehicle({ id: selectedVehicle.id, vehicle: newVehicle }).unwrap();
        if (updated) {
          setNewVehicle({
            vehicle_spec_id: 0,
            availability: 'available',
          });
          setIsEditing(false);
          refetch(); // Optionally refetch data to get the latest from server
        }
      } catch (error) {
        console.error('Error updating vehicle:', error);
      }
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    try {
      await deleteVehicle(id).unwrap();
      refetch(); // Optionally refetch data to get the latest
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Manage Vehicles</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit Vehicle' : 'Add New Vehicle'}</h2>
          <input
            type="number"
            placeholder="Vehicle Spec ID"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.vehicle_spec_id}
            onChange={(e) => setNewVehicle({ ...newVehicle, vehicle_spec_id: parseInt(e.target.value) })}
            required
          />
          <input
            type="text"
            placeholder="Availability"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.availability}
            onChange={(e) => setNewVehicle({ ...newVehicle, availability: e.target.value })}
            required
          />
          <button
            onClick={isEditing ? handleUpdateVehicle : handleAddVehicle}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update Vehicle' : 'Add Vehicle'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Vehicles</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Vehicle Spec ID</th>
              <th className="py-2 px-4 border-b">Availability</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="py-2 px-4 border-b">{vehicle.id}</td>
                <td className="py-2 px-4 border-b">{vehicle.vehicle_spec_id}</td>
                <td className="py-2 px-4 border-b">{vehicle.availability}</td>
                <td className="py-2 px-4 border-b">{vehicle.created_at}</td>
                <td className="py-2 px-4 border-b">{vehicle.updated_at}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                    onClick={() => handleEditVehicle(vehicle)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteVehicle(vehicle.id)}
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

export default ManageVehicles;
