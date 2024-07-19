import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchVehicleDetailsQuery, useBookVehicleMutation, useCheckAvailabilityQuery } from '../features/LoginAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

const vehicleImages: Record<number, string> = {
  1: 'https://i.pinimg.com/236x/f2/c0/75/f2c075302e5d0dce06c6e0952baf5081.jpg', // Toyota Camry
  2: 'https://i.pinimg.com/236x/c3/32/c6/c332c620e386b97fed50c2200dcf3c74.jpg', // Honda Civic
  3: 'https://i.pinimg.com/236x/ee/f3/f8/eef3f8adbe7050d37fc519ddc527e085.jpg', // Jeep Wrangler
  4: 'https://i.pinimg.com/236x/ff/5c/8a/ff5c8a5b2d48da0ff87255e29e16de68.jpg', // Ford F-150
  5: 'https://i.pinimg.com/236x/72/38/43/7238437b4de317aa2094076aa7a6bd98.jpg', // Toyota RAV4
  6: 'https://i.pinimg.com/236x/d4/45/6c/d4456cf12a9a3965c875e11644ed333c.jpg', // Tesla Model 3
  7: 'https://i.pinimg.com/236x/78/df/7d/78df7d7431dd249060dad214611ae482.jpg', // Chevrolet Suburban
  8: 'https://i.pinimg.com/474x/98/a6/66/98a666a7aeebd5fe2c6b0d453489eda3.jpg', // Ford Mustang
  9: 'https://i.pinimg.com/236x/a8/bf/14/a8bf14d7e2c692c4aab58c2420325b1d.jpg', // BMW X5
  10: 'https://i.pinimg.com/236x/5c/7e/9d/5c7e9d53460217543a0ca6c87feacc85.jpg', // Audi A4
  11: 'https://i.pinimg.com/236x/22/fb/78/22fb7858f90a79c917a4a2efae786ce1.jpg', // Mercedes-Benz GLE
  12: 'https://i.pinimg.com/236x/68/ab/06/68ab0684fac8ad9190f5126fdf4f132b.jpg', // Porsche 911
  13: 'https://i.pinimg.com/736x/67/fe/60/67fe6048bc27e13431efe2e83c3c370d.jpg', // Lamborghini Aventador
  14: 'https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg', // Toyota Camry
  15: 'https://i.pinimg.com/474x/34/08/7c/34087c271fdafa22df0803c5b35d5b6d.jpg', // Honda Civic
  16: 'https://i.pinimg.com/236x/c2/c2/04/c2c204c7235834a9e75e6c596a82d4df.jpg', // Jeep Wrangler
  17: 'https://i.pinimg.com/236x/1f/e1/29/1fe129174bb4ef07d466aa077c2de1b1.jpg', // Ford F-150
  18: 'https://i.pinimg.com/736x/e8/5a/ff/e85aff2dd06aed0ba2f0b0b903743a52.jpg', // Toyota RAV4
  19: 'https://i.pinimg.com/474x/92/b6/f9/92b6f9fb58a3dbca900faf4264712c78.jpg', // Tesla Model 3
  20: 'https://i.pinimg.com/236x/5e/b3/60/5eb3608df424e650225b59c3c6c02547.jpg',
  21: 'https://i.pinimg.com/236x/22/71/c4/2271c4e78df7c4a641053943b2abdd2e.jpg',
  22: 'https://i.pinimg.com/736x/38/b2/92/38b2928ad4b1fe597f049f15ff886178.jpg',
  23: 'https://i.pinimg.com/474x/35/61/f5/3561f5dec580042619b046e72b444c9d.jpg',
  24: 'https://i.pinimg.com/736x/e8/d3/0c/e8d30c783a9d491f4faefa0b917a3e71.jpg',
  25: 'https://i.pinimg.com/236x/1d/5d/fb/1d5dfba79b06173e7cbd8227facaffd1.jpg',
  26: 'https://i.pinimg.com/474x/95/69/ba/9569ba4a96bfec807895b07e37a7a65f.jpg',
  27: 'https://i.pinimg.com/236x/7c/5e/66/7c5e66b42928385e092c96d2b44b384d.jpg',
  28: 'https://i.pinimg.com/236x/b5/69/26/b569269b8dd80e6762da2a5368c208be.jpg',
  29: 'https://i.pinimg.com/236x/f1/ed/16/f1ed167fe7ec3b6cbf5e2e22368920c2.jpg',
  30: 'https://i.pinimg.com/736x/1f/20/2f/1f202f8abed5a610b33e5d5326016a8f.jpg',
  31: 'https://i.pinimg.com/236x/29/57/97/295797b9ac2237549c6e0546bce93870.jpg',
  32: 'https://i.pinimg.com/474x/53/5d/8a/535d8adc9d28204b309f3da0d167de78.jpg',
  33: 'https://i.pinimg.com/236x/1c/bd/d3/1cbdd3171d8e16605b2cc69f2a8a22c3.jpg',
  34: 'https://i.pinimg.com/474x/0e/19/b3/0e19b36584d92329cbde328770934c84.jpg',
  35: 'https://i.pinimg.com/236x/3e/cb/47/3ecb47990de7d05e3f9b40ae67718f2d.jpg',
  36: 'https://i.pinimg.com/474x/e1/20/cf/e120cf509b42da5c3263b9e426ec2fd2.jpg',
  37: 'https://i.pinimg.com/236x/39/03/aa/3903aa74a47ef2bafffa55feb43331e8.jpg',
  38: 'https://i.pinimg.com/474x/37/c4/0a/37c40a27936c2440deaab7b6aa03edd2.jpg',
  39: 'https://i.pinimg.com/236x/ea/2e/20/ea2e20128115693e9dda324ae523b807.jpg',
};

const VehicleBooking = () => {
  const { id } = useParams();
  const vehicleId = Number(id);
  const navigate = useNavigate();

  const { data: vehicle, error: fetchError, isLoading: isVehicleLoading } = useFetchVehicleDetailsQuery(vehicleId);
  const [bookVehicle] = useBookVehicleMutation();

  const [bookingDate, setBookingDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: isAvailable, isLoading: isAvailabilityLoading } = useCheckAvailabilityQuery({ 
    vehicleId, 
    bookingDate, 
    numberOfDays 
  });

  useEffect(() => {
    if (vehicle && bookingDate) {
      setTotalAmount(vehicle.rental_rate * numberOfDays);
    }
    if (isAvailable !== undefined) {
      setAvailability(isAvailable);
    }
  }, [vehicle, bookingDate, numberOfDays, isAvailable]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const booking = {
        vehicle_id: vehicleId,
        booking_date: bookingDate,
        number_of_days: numberOfDays
      };
      await bookVehicle(booking);
      alert('Vehicle booked successfully');
    } catch (err) {
      console.error('Error booking vehicle:', err);
      setError('Failed to book vehicle. Please try again later.');
    }
  };

  if (isVehicleLoading || isAvailabilityLoading) {
    return <div className="flex justify-center items-center min-h-screen"><div>Loading...</div></div>;
  }

  if (fetchError) {
    return <div className="flex justify-center items-center min-h-screen"><div>Error loading vehicle details: {fetchError.message}</div></div>;
  }

  if (!vehicle) {
    return <div className="flex justify-center items-center min-h-screen"><div>No vehicle details available.</div></div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${vehicleImages[vehicleId]})` }}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-3xl backdrop-blur-md">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 mb-4 transition duration-300"
          >
            Back
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{vehicle.vehicle_specs.model}</h1>
          {vehicleImages[vehicleId] && (
            <img 
              src={vehicleImages[vehicleId]} 
              alt={vehicle.vehicle_specs.model} 
              className="w-full h-64 object-cover rounded-md mb-6 shadow-md" 
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-lg text-gray-800 mb-2"><strong>Manufacturer:</strong> {vehicle.vehicle_specs.manufacturer}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Seating Capacity:</strong> {vehicle.vehicle_specs.seating_capacity}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Engine Capacity:</strong> {vehicle.vehicle_specs.engine_capacity}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Year:</strong> {vehicle.vehicle_specs.year}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Fuel Type:</strong> {vehicle.vehicle_specs.fuel_type}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Features:</strong> {vehicle.vehicle_specs.features}</p>
            </div>
            <div>
              <p className="text-lg text-gray-800 mb-2"><strong>Availability:</strong> {vehicle.availability}</p>
              <p className="text-lg text-gray-800 mb-2"><strong>Rental Rate:</strong> ${vehicle.rental_rate}/day</p>
              <label className="block mb-2 text-lg text-gray-800">Select Booking Date:</label>
              <input
                type="date"
                className="block w-full p-2 mb-3 border rounded"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
              />
              <label className="block mb-2 text-lg text-gray-800">Number of Days:</label>
              <input
                type="number"
                className="block w-full p-2 mb-3 border rounded"
                value={numberOfDays}
                onChange={(e) => setNumberOfDays(Number(e.target.value))}
                min="1"
                required
              />
              <p className="text-lg text-gray-800 mb-4"><strong>Total Amount:</strong> ${totalAmount}</p>
              {availability === false && (
                <p className="text-red-500 mb-4">The vehicle is not available for the selected dates.</p>
              )}
              <button
                onClick={handleBooking}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                disabled={availability === false}
              >
                Book
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VehicleBooking;
