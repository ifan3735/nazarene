import React, { useEffect, useState } from 'react';
import { useFetchAllFleetQuery, useAddFleetMutation, useDeleteFleetMutation, useUpdateFleetMutation } from '../../features/LoginAPI';
import { FleetManagements } from '../../types';

const FleetManagement: React.FC = () => {
  const { data: fleet = [], refetch } = useFetchAllFleetQuery();
  console.log(fleet);
  const [updateFleet] = useUpdateFleetMutation();
  console.log(updateFleet);
  const [deleteFleet] = useDeleteFleetMutation();
  console.log(deleteFleet);
  const [addFleet] = useAddFleetMutation();
  console.log(addFleet);
  const [selectedFleet, setSelectedFleet] = useState<FleetManagements | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newFleet, setNewFleet] = useState<Omit<FleetManagements, 'id' | 'created_at' | 'updated_at'>>({
    vehicle_id: 0,
    acquisition_date: '',
    depreciation_rate: 0,
    current_value: 0,
    maintenance_cost: 0,
    status: 'active',
  });

  const handleAddFleet = async () => {
    try {
      const addedFleet = await addFleet(newFleet).unwrap();
      if (addedFleet) {
        setNewFleet({
          vehicle_id: 0,
          acquisition_date: '',
          depreciation_rate: 0,
          current_value: 0,
          maintenance_cost: 0,
          status: 'active',
        });
        refetch();
      }
    } catch (error) {
      console.error('Error adding fleet:', error);
    }
  };

  const handleEditFleet = (fleet: FleetManagements) => {
    setSelectedFleet(fleet);
    setNewFleet({
      vehicle_id: fleet.vehicle_id,
      acquisition_date: fleet.acquisition_date,
      depreciation_rate: fleet.depreciation_rate,
      current_value: fleet.current_value,
      maintenance_cost: fleet.maintenance_cost,
      status: fleet.status,
    });
    setIsEditing(true);
  };

  const handleUpdateFleet = async () => {
    if (selectedFleet) {
      try {
        const updated = await updateFleet({ id: selectedFleet.id, Fleet: newFleet }).unwrap();
        if (updated) {
          setSelectedFleet(null);
          setNewFleet({
            vehicle_id: 0,
            acquisition_date: '',
            depreciation_rate: 0,
            current_value: 0,
            maintenance_cost: 0,
            status: 'active',
          });
          setIsEditing(false);
          refetch();
        }
      } catch (error) {
        console.error('Error updating fleet:', error);
      }
    }
  };

  const handleDeleteFleet = async (id: number) => {
    try {
      await deleteFleet(id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error deleting fleet:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Fleet Management</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit Vehicle' : 'Add New Vehicle'}</h2>
          <input
            type="number"
            placeholder="Vehicle ID"
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.vehicle_id}
            onChange={(e) => setNewFleet({ ...newFleet, vehicle_id: parseInt(e.target.value) })}
            required
          />
          <input
            type="date"
            placeholder="Acquisition Date"
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.acquisition_date}
            onChange={(e) => setNewFleet({ ...newFleet, acquisition_date: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Depreciation Rate"
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.depreciation_rate}
            onChange={(e) => setNewFleet({ ...newFleet, depreciation_rate: parseFloat(e.target.value) })}
            required
          />
          <input
            type="number"
            placeholder="Current Value"
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.current_value}
            onChange={(e) => setNewFleet({ ...newFleet, current_value: parseFloat(e.target.value) })}
            required
          />
          <input
            type="number"
            placeholder="Maintenance Cost"
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.maintenance_cost}
            onChange={(e) => setNewFleet({ ...newFleet, maintenance_cost: parseFloat(e.target.value) })}
            required
          />
          <select
            className="block w-full p-2 mb-3 border rounded"
            value={newFleet.status}
            onChange={(e) => setNewFleet({ ...newFleet, status: e.target.value as 'active' | 'inactive' })}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button
            onClick={isEditing ? handleUpdateFleet : handleAddFleet}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update Vehicle' : 'Add Vehicle'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Fleet</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Vehicle ID</th>
              <th className="py-2 px-4 border-b">Acquisition Date</th>
              <th className="py-2 px-4 border-b">Depreciation Rate</th>
              <th className="py-2 px-4 border-b">Current Value</th>
              <th className="py-2 px-4 border-b">Maintenance Cost</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleet.map(vehicle => (
              <tr key={vehicle.id}>
                <td className="py-2 px-4 border-b">{vehicle.id}</td>
                <td className="py-2 px-4 border-b">{vehicle.vehicle_id}</td>
                <td className="py-2 px-4 border-b">{vehicle.acquisition_date}</td>
                <td className="py-2 px-4 border-b">{vehicle.depreciation_rate}</td>
                <td className="py-2 px-4 border-b">{vehicle.current_value}</td>
                <td className="py-2 px-4 border-b">{vehicle.maintenance_cost}</td>
                <td className="py-2 px-4 border-b">{vehicle.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                    onClick={() => handleEditFleet(vehicle)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteFleet(vehicle.id)}
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
}

export default FleetManagement;
