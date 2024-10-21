import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Brand/Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Hospital Management</Link>
        </div>

        {/* Right Side: Links */}
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/doctors" className="hover:text-gray-300">Doctors</Link></li>
          <li><Link to="/appointment" className="hover:text-gray-300">Appointments</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
