// src/components/Bookings.tsx
import React from 'react';

const bookingsData = [
  {
    id: 1,
    vehicle: 'Toyota Camry',
    price: '$50/day',
    details: 'Comfortable and reliable sedan with great fuel efficiency.',
    image: 'https://i.pinimg.com/236x/28/4a/83/284a839a8e807a476c61dd77eb56cb71.jpg'
  },
  {
    id: 2,
    vehicle: 'Honda Civic',
    price: '$45/day',
    details: 'Fuel-efficient and compact car, perfect for city driving.',
    image: 'https://i.pinimg.com/236x/5c/b9/04/5cb9048f80b13be05bd382874f2e5a93.jpg'
  },
    {
        id: 3,
        vehicle: 'Jeep Wrangler',
        price: '$80/day',
        details: 'Off-road capable and rugged SUV for outdoor adventures.',
        image: 'https://i.pinimg.com/474x/78/7a/d4/787ad43e36ec9e2584638c45636fa043.jpg'
    },
    {
        id: 4,
        vehicle: 'Ford F-150',
        price: '$70/day',
        details: 'Powerful and versatile pickup truck for work or play.',
        image: 'https://i.pinimg.com/474x/76/90/40/769040bea0bde14efa0118b3973f1f1e.jpg'
    },
    {
        id: 5,
        vehicle: 'Toyota RAV4',
        price: '$60/day',
        details: 'Compact SUV with great fuel economy for road trips.',
        image: 'https://i.pinimg.com/474x/68/39/44/6839446796e1d1cfdaee9aceace52145.jpg'
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
        image: 'https://i.pinimg.com/236x/5f/ba/af/5fbaaf4d911c1d164e874a0a38094cb3.jpg'
    },
    {
        id: 8,
        vehicle: 'Ford Mustang',
        price: '$75/day',
        details: 'Iconic American muscle car with classic style and power.',
        image: 'https://i.pinimg.com/474x/70/cf/48/70cf489d72a37dbe16f917d227821f07.jpg'
    },
    {
        id: 9,
        vehicle: 'BMW X5',
        price: '$95/day',
        details: 'Luxury SUV with premium features and performance.',
        image: 'https://i.pinimg.com/236x/93/a7/2c/93a72c41c047b20fdd12c89a2df8b80c.jpg'
    },
    {
        id: 10,
        vehicle: 'Audi A4',
        price: '$85/day',
        details: 'Sophisticated and elegant sedan with advanced technology.',
        image: 'https://i.pinimg.com/236x/95/f2/0e/95f20e297694ff6c46c8d77f4fae2452.jpg'
    },
    {
        id: 11,
        vehicle: 'Mercedes-Benz GLE',
        price: '$110/day',
        details: 'Premium SUV with luxurious design and performance.',
        image: 'https://i.pinimg.com/236x/59/50/d5/5950d58a80778077b95a18da4da397aa.jpg'
    },
    {
        id: 12,
        vehicle: 'Porsche 911',
        price: '$150/day',
        details: 'Iconic sports car with precision engineering and speed.',
        image: 'https://i.pinimg.com/474x/41/a3/1e/41a31e156b680b5be3f6e842e794a170.jpg'
    }
  // Add more vehicle data as needed
];

const Bookings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Bookings</h1>
      <p className="text-gray-600 mb-6">Available vehicles for booking:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookingsData.map(vehicle => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={vehicle.image} alt={vehicle.vehicle} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">{vehicle.vehicle}</h2>
            <p className="text-gray-600 mb-2">{vehicle.price}</p>
            <p className="text-gray-600">{vehicle.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
