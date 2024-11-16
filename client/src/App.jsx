import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Services/Services';
import Doctors from './components/Pages/Doctors';
import Appointment from './components/Pages/Appointment';
import Departments from './components/Pages/Department';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import AboutUs from './components/about/About';
import Footer from './components/Navbar/Footer';
import AdminDashboard from './components/about/Admin';

function App() {
  // State to track login status
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function to handle login
  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar isLoggedIn={!!token} handleLogout={handleLogout} />

        {/* Main content area */}
        <div className="flex-1 flex flex-col  overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/department" element={<Departments />} />
            <Route path="/admin" element={<AdminDashboard />} />          


          </Routes>
          <Footer />

        </div>
      </div>

    </Router>
  );
}

export default App;
