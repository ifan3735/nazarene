import React, { useState } from 'react';
import { 
  useFetchAllLocationsQuery, 
  useAddLocationMutation, 
  useDeleteLocationMutation, 
  useUpdateLocationMutation 
} from '../../features/LoginAPI';
import { Location } from '../../types';

const Locations: React.FC = () => {
  const { data: locations = [], refetch } = useFetchAllLocationsQuery();
  const [addLocation] = useAddLocationMutation();
  const [updateLocation] = useUpdateLocationMutation();
  const [deleteLocation] = useDeleteLocationMutation();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newLocation, setNewLocation] = useState<Omit<Location, 'id' | 'created_at' | 'updated_at'>>({
    name: '',
    address: '',
    contact_phone: '',
  });

  const handleAddLocation = async () => {
    if (!newLocation.name || !newLocation.address || !newLocation.contact_phone) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const addedLocation = await addLocation(newLocation).unwrap();
      if (addedLocation) {
        setNewLocation({
          name: '',
          address: '',
          contact_phone: '',
        });
        refetch();
      }
    } catch (error) {
      console.error('Error adding location:', error);
    }
  };

  const handleEditLocation = (location: Location) => {
    setSelectedLocation(location);
    setNewLocation({
      name: location.name,
      address: location.address,
      contact_phone: location.contact_phone,
    });
    setIsEditing(true);
  };

  const handleUpdateLocation = async () => {
    if (selectedLocation) {
      if (!newLocation.name || !newLocation.address || !newLocation.contact_phone) {
        alert('Please fill out all fields.');
        return;
      }

      try {
        const updatedLocation = await updateLocation({ id: selectedLocation.id, location: newLocation }).unwrap();  
        if (updatedLocation) {
          setNewLocation({
            name: '',
            address: '',
            contact_phone: '',
          });
          setSelectedLocation(null);
          setIsEditing(false);
          refetch();
        }
      } catch (error) {
        console.error('Error updating location:', error);
      }
    }
  };

  const handleDeleteLocation = async (id: number) => {
    try {
      await deleteLocation(id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error deleting location:', error);
    }
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
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Contact Phone</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td className="py-2 px-4 border-b">{location.id}</td>
                <td className="py-2 px-4 border-b">{location.name}</td>
                <td className="py-2 px-4 border-b">{location.address}</td>
                <td className="py-2 px-4 border-b">{location.contact_phone}</td>
                <td className="py-2 px-4 border-b">{location.created_at}</td>
                <td className="py-2 px-4 border-b">{location.updated_at}</td>
                <td className="py-2 px-4 border-b">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Locations;
