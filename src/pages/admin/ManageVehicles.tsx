import React, { useState, useEffect } from 'react';
import { fetchVehicles, addVehicle, updateVehicle, deleteVehicle } from '../../services/vehicleService';

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [newVehicle, setNewVehicle] = useState({ name: '', model: '', year: '' });

  useEffect(() => {
    const loadVehicles = async () => {
      const response = await fetchVehicles();
      setVehicles(response);
    };
    loadVehicles();
  }, []);

  const handleAddVehicle = async () => {
    await addVehicle(newVehicle);
    setNewVehicle({ name: '', model: '', year: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Manage Vehicles</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add New Vehicle</h2>
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.name}
            onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Model"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.model}
            onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year"
            className="block w-full p-2 mb-3 border rounded"
            value={newVehicle.year}
            onChange={(e) => setNewVehicle({ ...newVehicle, year: e.target.value })}
          />
          <button onClick={handleAddVehicle} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Vehicle
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Vehicles</h2>
        <ul>
          {vehicles.map(vehicle => (
            <li key={vehicle.id} className="flex justify-between items-center mb-2">
              <span>{vehicle.name} - {vehicle.model} ({vehicle.year})</span>
              <div>
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={() => deleteVehicle(vehicle.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageVehicles;
