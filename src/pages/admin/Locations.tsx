import React, { useEffect, useState } from 'react';
import { fetchLocations, addLocation, updateLocation, deleteLocation } from '../../services/locationService';
import { Location } from '../../types';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [newLocation, setNewLocation] = useState<Omit<Location, 'id' | 'created_at' | 'updated_at'>>({
    name: '',
    address: '',
    contact_phone: ''
  });
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const loadLocations = async () => {
      const response = await fetchLocations();
      setLocations(response);
    };
    loadLocations();
  }, []);

  const handleAddLocation = async () => {
    const added = await addLocation(newLocation);
    if (added) {
      setLocations([...locations, added]);
      setNewLocation({ name: '', address: '', contact_phone: '' });
    }
  };

  const handleEditLocation = (location: Location) => {
    setSelectedLocation(location);
    setNewLocation({
      name: location.name,
      address: location.address,
      contact_phone: location.contact_phone
    });
    setIsEditing(true);
  };

  const handleUpdateLocation = async () => {
    if (selectedLocation) {
      const updated = await updateLocation(selectedLocation.id, newLocation);
      if (updated) {
        setLocations(locations.map(loc => (loc.id === selectedLocation.id ? { ...loc, ...newLocation } : loc)));
        setSelectedLocation(null);
        setNewLocation({ name: '', address: '', contact_phone: '' });
        setIsEditing(false);
      }
    }
  };

  const handleDeleteLocation = async (id: number) => {
    await deleteLocation(id);
    setLocations(locations.filter(loc => loc.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Manage Locations</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit Location' : 'Add New Location'}</h2>
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 mb-3 border rounded"
            value={newLocation.name}
            onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="block w-full p-2 mb-3 border rounded"
            value={newLocation.address}
            onChange={(e) => setNewLocation({ ...newLocation, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact Phone"
            className="block w-full p-2 mb-3 border rounded"
            value={newLocation.contact_phone}
            onChange={(e) => setNewLocation({ ...newLocation, contact_phone: e.target.value })}
            required
          />
          <button
            onClick={isEditing ? handleUpdateLocation : handleAddLocation}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update Location' : 'Add Location'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Locations</h2>
        <ul>
          {locations.map(location => (
            <li key={location.id} className="flex justify-between items-center mb-2">
              <span>{location.name} - {location.address} ({location.contact_phone})</span>
              <div>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                  onClick={() => handleEditLocation(location)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDeleteLocation(location.id)}
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
};

export default Locations;
