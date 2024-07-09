import React from 'react';

const Discover = () => {
  // Example data for new features and services
  const features = [
    {
      id: 1,
      title: 'New Vehicle Categories',
      description: 'Explore a wide range of new vehicle categories added to our fleet.',
      link: '/new-vehicles',
    },
    {
      id: 2,
      title: 'Loyalty Program',
      description: 'Join our loyalty program and earn points on every booking.',
      link: '/loyalty-program',
    },
    {
      id: 3,
      title: 'Mobile App',
      description: 'Download our new mobile app for a seamless booking experience.',
      link: '/mobile-app',
    },
    {
      id: 4,
      title: '24/7 Customer Support',
      description: 'Get support anytime with our 24/7 customer service.',
      link: '/customer-support',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Discover</h1>
        <p className="text-gray-600">Discover new features and services.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">New Features & Services</h2>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <a href={feature.link} className="text-blue-500 hover:underline">
                Learn more
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Webinar: Vehicle Maintenance Tips</h3>
            <p className="text-gray-600 mb-2">
              Join us for a webinar on vehicle maintenance tips on August 15, 2024.
            </p>
            <a href="/events/webinar-vehicle-maintenance" className="text-blue-500 hover:underline">
              Register now
            </a>
          </li>
          <li className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Customer Appreciation Day</h3>
            <p className="text-gray-600 mb-2">
              Celebrate with us on September 10, 2024, with special discounts and offers.
            </p>
            <a href="/events/customer-appreciation-day" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Discover;
