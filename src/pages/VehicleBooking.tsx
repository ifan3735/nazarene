import React, { useState, useEffect } from 'react';
import { fetchVehicles, bookVehicle } from '../services/vehicleService';
import { Vehicle } from '../types';

const VehicleBooking = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [bookingDate, setBookingDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const response = await fetchVehicles();
        setVehicles(response);
      } catch (err) {
        console.error('Error loading vehicles:', err);
        setError('Failed to load vehicles. Please try again later.');
      }
    };
    loadVehicles();
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const booking = { vehicle_id: selectedVehicle, booking_date: bookingDate, return_date: returnDate };
      await bookVehicle(booking);
      alert('Vehicle booked successfully');
    } catch (err) {
      console.error('Error booking vehicle:', err);
      setError('Failed to book vehicle. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Book a Vehicle</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleBooking} className="bg-white p-6 rounded shadow-md w-80">
        <select
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
          className="block w-full p-2 mb-3 border rounded"
          required
        >
          <option value="">Select Vehicle</option>
          {vehicles.map(vehicle => (
            <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
          ))}
        </select>
        <input
          type="date"
          className="block w-full p-2 mb-3 border rounded"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        />
        <input
          type="date"
          className="block w-full p-2 mb-3 border rounded"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Book
        </button>
      </form>
    </div>
  );
};

export default VehicleBooking;
