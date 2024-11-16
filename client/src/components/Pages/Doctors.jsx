// Doctors.jsx
import React from 'react';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', imageUrl: 'https://img.freepik.com/free-photo/specialist-male-doctor-having-his-arms-crossed_23-2148525088.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
    { name: 'Dr. Jane Smith', specialty: 'Neurology', imageUrl: 'https://img.freepik.com/free-photo/doctor-wearing-white-coat-medium-shot_23-2149844579.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
    { name: 'Dr. Emily White', specialty: 'Orthopedics', imageUrl: 'https://img.freepik.com/free-photo/portrait-young-african-american-woman-doctor-against-blue-background_93675-132921.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
    { name: 'Dr. Mark Brown', specialty: 'Pediatrics', imageUrl: 'https://img.freepik.com/premium-photo/beautiful-african-american-female-pediatric-nurse-modern-office_255667-6118.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
    { name: 'Dr. Sarah Johnson', specialty: 'Oncology', imageUrl: 'https://img.freepik.com/free-photo/cheerful-ethnic-doctor-with-arms-crossed_23-2147767333.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
    { name: 'Dr. Alex Green', specialty: 'Dermatology', imageUrl: 'https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-her-pocket-closeup-female-smiling-while-standing-straight-white-background_657921-731.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
  ];

  return (
    <section className="p-10 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-700">Our Doctors</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-green-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src={doctor.imageUrl} 
              alt={`${doctor.name}`} 
              className="w-full h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-green-600">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
