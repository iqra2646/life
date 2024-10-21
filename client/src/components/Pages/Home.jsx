import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Hospital Management System</h1>
        <p className="text-xl text-gray-600 mb-6">Providing all services just like Kenyatta Hospital</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book an Appointment</button>
      </div>
    </div>
  );
};

export default Home;
