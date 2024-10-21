import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home';
import Services from './components/Services/Services';
import Doctors from './components/Pages/Doctors';
import Appointment from './components/Pages/Appointment';


function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="ml-64 flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <div className="p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              {/* Add the new route */}
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointment" element={<Appointment />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
