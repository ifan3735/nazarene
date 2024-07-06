import React, { useEffect, useState } from 'react';
import { fetchFleet, updateFleetVehicle, addFleetVehicle, deleteFleetVehicle } from '../../services/fleetService';
import { FleetManagements, VehicleSpecs } from '../../types';

const FleetManagement: React.FC = () => {
  const [fleet, setFleet] = useState<FleetManagements[]>([]);
  const [newVehicle, setNewVehicle] = useState<Omit<FleetManagements, 'id' | 'created_at' | 'updated_at'>>({
    vehicle_id: 0,
    acquisition_date: '',
    depreciation_rate: 0,
    current_value: 0,
    maintenance_cost: 0,
    status: 'active'
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<FleetManagements | null>(null);

  useEffect(() => {
    const loadFleet = async () => {
      const response = await fetchFleet();
      setFleet(response);
    };
    loadFleet();
  }, []);

  const handleAddVehicle = async () => {
    const added = await addFleetVehicle(newVehicle);
    if (added) {
      setFleet([...fleet, added]);
      setNewVehicle({
        vehicle_id: 0,
        acquisition_date: '',
        depreciation_rate: 0,
        current_value: 0,
        maintenance_cost: 0,
        status: 'active'
      });
    }
  };

  const handleEditVehicle = (vehicle: FleetManagements) => {
    setSelectedVehicle(vehicle);
    setNewVehicle({
      vehicle_id: vehicle.vehicle_id,
      acquisition_date: vehicle.acquisition_date,
      depreciation_rate: vehicle.depreciation_rate,
      current_value: vehicle.current_value,
      maintenance_cost: vehicle.maintenance_cost,
      status: vehicle.status
    });
    setIsEditing(true);
  };

  const handleUpdateVehicle = async () => {
    if (selectedVehicle) {
      const updated = await updateFleetVehicle(selectedVehicle.id, newVehicle);
      if (updated) {
        setFleet(fleet.map(v => (v.id === selectedVehicle.id ? { ...v, ...newVehicle } : v)));
        setSelectedVehicle(null);
        setNewVehicle({
          vehicle_id: 0,
          acquisition_date: '',
          depreciation_rate: 0,
          current_value: 0,
          maintenance_cost: 0,
          status: 'active'
        });
        setIsEditing(false);
      }
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    await deleteFleetVehicle(id);
    setFleet(fleet.filter(v => v.id !== id));
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
            value={newVehicle.vehicle_id}
            onChange={(e) => setNewVehicle({ ...newVehicle, vehicle_id: parseInt(e.target.value) })}
            required
          />
          <input
            type="date"
            placeholder="Acquisition Date"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.acquisition_date}
            onChange={(e) => setNewVehicle({ ...newVehicle, acquisition_date: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Depreciation Rate"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.depreciation_rate}
            onChange={(e) => setNewVehicle({ ...newVehicle, depreciation_rate: parseFloat(e.target.value) })}
            required
          />
          <input
            type="number"
            placeholder="Current Value"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.current_value}
            onChange={(e) => setNewVehicle({ ...newVehicle, current_value: parseFloat(e.target.value) })}
            required
          />
          <input
            type="number"
            placeholder="Maintenance Cost"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.maintenance_cost}
            onChange={(e) => setNewVehicle({ ...newVehicle, maintenance_cost: parseFloat(e.target.value) })}
            required
          />
          <select
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.status}
            onChange={(e) => setNewVehicle({ ...newVehicle, status: e.target.value as 'active' | 'inactive' })}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button
            onClick={isEditing ? handleUpdateVehicle : handleAddVehicle}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update Vehicle' : 'Add Vehicle'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Fleet</h2>
        <ul>
          {fleet.map(vehicle => (
            <li key={vehicle.id} className="flex justify-between items-center mb-2">
              <span>Vehicle ID: {vehicle.vehicle_id} - Acquisition Date: {vehicle.acquisition_date}</span>
              <div>
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
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
}

export default FleetManagement;

