import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white flex flex-col fixed">
      <div className="text-3xl font-bold p-6 bg-gray-900">
        <h2>Hospital Admin</h2>
      </div>
      <ul className="flex flex-col p-6 space-y-4">
        <li>
          <Link to="/" className="hover:bg-gray-700 p-3 rounded flex items-center">
            <span className="material-icons">home</span>
            <span className="ml-2">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:bg-gray-700 p-3 rounded flex items-center">
            <span className="material-icons">medical_services</span>
            <span className="ml-2">Services</span>
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="hover:bg-gray-700 p-3 rounded flex items-center">
            <span className="material-icons">people</span>
            <span className="ml-2">Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="hover:bg-gray-700 p-3 rounded flex items-center">
            <span className="material-icons">calendar_today</span>
            <span className="ml-2">Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:bg-gray-700 p-3 rounded flex items-center">
            <span className="material-icons">settings</span>
            <span className="ml-2">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
