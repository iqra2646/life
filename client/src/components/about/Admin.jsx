import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5300/appointments');
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments || []);
    } else {
        console.error('Failed to fetch appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Delete an appointment
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5300/appointments/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Appointment deleted successfully!');
        setAppointments(appointments.filter((appt) => appt.id !== id));
      } else {
        console.error('Failed to delete appointment');
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  // Start editing an appointment
  const startEdit = (appointment) => {
    setEditingAppointment(appointment);
    setUpdatedData(appointment);
  };

  // Handle input changes for editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  // Update an appointment
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5300/appointments/${editingAppointment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        alert('Appointment updated successfully!');
        setAppointments(
          appointments.map((appt) =>
            appt.id === editingAppointment.id ? updatedData : appt
          )
        );
        setEditingAppointment(null); // Exit editing mode
      } else {
        console.error('Failed to update appointment');
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments to display.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border border-gray-300 px-4 py-2">{appointment.name}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.email}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
                <td className="border border-gray-300 px-4 py-2">{appointment.time}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => startEdit(appointment)}
                    className="bg-green-600 text-white px-2 py-1 rounded-lg hover:bg-green-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(appointment.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingAppointment && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Edit Appointment</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={updatedData.name}
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
                value={updatedData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={updatedData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={updatedData.date}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="time">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={updatedData.time}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
            >
              Update Appointment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
