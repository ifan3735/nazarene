// import React, { useState } from 'react';
// import { Vehicle } from '../types';

// const VehicleForm = () => {
//   const [vehicle, setVehicle] = useState<Omit<Vehicle, 'id' | 'created_at' | 'updated_at'>>({
//     name: '',
//     model: '',
//     year: new Date().getFullYear(),
//     availability: 'available'
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Submit form
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={vehicle.name}
//         onChange={(e) => setVehicle({ ...vehicle, name: e.target.value })}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Model"
//         value={vehicle.model}
//         onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Year"
//         value={vehicle.year}
//         onChange={(e) => setVehicle({ ...vehicle, year: parseInt(e.target.value, 10) })}
//         required
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default VehicleForm;
