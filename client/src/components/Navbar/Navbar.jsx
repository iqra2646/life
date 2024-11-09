import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div>
        <NavLink to="/" className="text-2xl font-bold">
          Hospital System
        </NavLink>
      </div>
      <div className="space-x-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/services" className="hover:underline">Services</NavLink>
        <NavLink to="/doctors" className="hover:underline">Doctors</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/appointment" className="hover:underline">Appointment</NavLink>
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="hover:underline">Login</NavLink>
            <NavLink to="/signup" className="hover:underline">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
