
const Calendar = () => {
  // Example data for user's schedule and events (replace with actual data or API calls)
  const schedule = [
    { id: 1, title: 'Car Rental Pickup', date: '2024-07-10', time: '10:00 AM' },
    { id: 2, title: 'Meeting with Client', date: '2024-07-12', time: '2:00 PM' },
    { id: 3, title: 'Car Rental Return', date: '2024-07-15', time: '4:00 PM' },
  ];

  const events = [
    { id: 1, title: 'Maintenance Check', date: '2024-07-11', description: 'Scheduled maintenance check for vehicle.' },
    { id: 2, title: 'Webinar: Vehicle Safety', date: '2024-07-20', description: 'Join our webinar on vehicle safety.' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
        <p className="text-gray-600">View and manage your schedule.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Schedule</h2>
        <ul className="space-y-4">
          {schedule.map((item) => (
            <li key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">Date: {item.date}</p>
              <p className="text-gray-600">Time: {item.time}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
