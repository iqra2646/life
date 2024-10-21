import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission (e.g., send data to an API)
    console.log('Appointment booked:', formData);
    alert('Appointment booked successfully!');
    setFormData({ name: '', email: '', phone: '', date: '', time: '' }); // Reset form
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="date">
            Appointment Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700" htmlFor="time">
            Appointment Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;
