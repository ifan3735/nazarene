// src/components/Bookings.js
import React from 'react';

const bookingsData = [
  {
    id: 1,
    vehicle: 'Toyota Camry',
    price: '$50/day',
    details: 'Comfortable and reliable sedan with great fuel efficiency.',
    image: 'https://i.pinimg.com/474x/2c/9a/f2/2c9af260032522ed81e3c111f13b13ae.jpg'
  },
  {
    id: 2,
    vehicle: 'Honda Civic',
    price: '$45/day',
    details: 'Fuel-efficient and compact car, perfect for city driving.',
    image: 'https://i.pinimg.com/236x/69/df/93/69df93cfcc6a0321d0b00187a6511f12.jpg'
  },
  {
    id: 3,
    vehicle: 'Jeep Wrangler',
    price: '$80/day',
    details: 'Off-road capable and rugged SUV for outdoor adventures.',
    image: 'https://i.pinimg.com/474x/a5/25/15/a52515bbc8c05f0b6464a1c130a8828a.jpg'
  },
  {
    id: 4,
    vehicle: 'Ford F-150',
    price: '$70/day',
    details: 'Powerful and versatile pickup truck for work or play.',
    image: 'https://i.pinimg.com/236x/ff/5c/8a/ff5c8a5b2d48da0ff87255e29e16de68.jpg'
  },
  {
    id: 5,
    vehicle: 'Toyota RAV4',
    price: '$60/day',
    details: 'Compact SUV with great fuel economy for road trips.',
    image: 'https://i.pinimg.com/236x/72/38/43/7238437b4de317aa2094076aa7a6bd98.jpg'
  },
  {
    id: 6,
    vehicle: 'Tesla Model 3',
    price: '$100/day',
    details: 'Electric car with cutting-edge technology and performance.',
    image: 'https://i.pinimg.com/236x/1f/c3/c9/1fc3c955eb7b48ce531f75b7fa9a43e5.jpg'
  },
  {
    id: 7,
    vehicle: 'Chevrolet Suburban',
    price: '$90/day',
    details: 'Spacious and comfortable SUV for family trips.',
    image: 'https://i.pinimg.com/236x/78/df/7d/78df7d7431dd249060dad214611ae482.jpg'
  },
  {
    id: 8,
    vehicle: 'Ford Mustang',
    price: '$75/day',
    details: 'Iconic American muscle car with classic style and power.',
    image: 'https://i.pinimg.com/236x/b7/ea/7e/b7ea7ed2c7f5d51e9d506ba4d22ac680.jpg'
  },
  {
    id: 9,
    vehicle: 'BMW X5',
    price: '$95/day',
    details: 'Luxury SUV with premium features and performance.',
    image: 'https://i.pinimg.com/236x/76/01/b3/7601b3b5a4414688be8c1d1b0efb8998.jpg'
  },
  {
    id: 10,
    vehicle: 'Audi A4',
    price: '$85/day',
    details: 'Sophisticated and elegant sedan with advanced technology.',
    image: 'https://i.pinimg.com/236x/5c/7e/9d/5c7e9d53460217543a0ca6c87feacc85.jpg'
  },
  {
    id: 11,
    vehicle: 'Mercedes-Benz GLE',
    price: '$110/day',
    details: 'Premium SUV with luxurious design and performance.',
    image: 'https://i.pinimg.com/236x/22/fb/78/22fb7858f90a79c917a4a2efae786ce1.jpg'
  },
  {
    id: 12,
    vehicle: 'Porsche 911',
    price: '$150/day',
    details: 'Iconic sports car with precision engineering and speed.',
    image: 'https://i.pinimg.com/736x/42/12/0f/42120f99820ab4343939fcda0b2d16a9.jpg'
  }
];

const Bookings = () => {
  const handleBooking = (vehicleId) => {
    // Handle booking logic here, e.g., navigate to a booking form with the vehicleId
    console.log(`Booking vehicle with ID: ${vehicleId}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Bookings</h1>
      <p className="text-gray-600 mb-6">Available vehicles for booking:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookingsData.map(vehicle => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={vehicle.image} alt={vehicle.vehicle} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">{vehicle.vehicle}</h2>
            <p className="text-gray-600 mb-2">{vehicle.price}</p>
            <p className="text-gray-600 mb-4">{vehicle.details}</p>
            <button 
              onClick={() => handleBooking(vehicle.id)} 
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
