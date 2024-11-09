// Doctors.jsx
import React from 'react';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', imageUrl: 'https://via.placeholder.com/300x150' },
    { name: 'Dr. Jane Smith', specialty: 'Neurology', imageUrl: 'https://via.placeholder.com/300x150' },
    { name: 'Dr. Emily White', specialty: 'Orthopedics', imageUrl: 'https://via.placeholder.com/300x150' },
    { name: 'Dr. Mark Brown', specialty: 'Pediatrics', imageUrl: 'https://via.placeholder.com/300x150' },
    { name: 'Dr. Sarah Johnson', specialty: 'Oncology', imageUrl: 'https://via.placeholder.com/300x150' },
    { name: 'Dr. Alex Green', specialty: 'Dermatology', imageUrl: 'https://via.placeholder.com/300x150' },
  ];

  return (
    <section className="p-10 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">Our Doctors</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src={doctor.imageUrl} 
              alt={`${doctor.name}`} 
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
