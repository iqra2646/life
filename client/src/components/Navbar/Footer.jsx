import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500  text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Hospital Logo and Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Our Hospital</h2>
          <p className="text-sm">
            Leading healthcare provider with a commitment to delivering
            high-quality patient care, advanced technology, and a compassionate environment
            for patients and their families.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about-us" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-300">Services</a></li>
            <li><a href="/doctors" className="hover:text-blue-300">Doctors</a></li>
            <li><a href="/appointments" className="hover:text-blue-300">Book Appointment</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-sm">123 Health St, Wellness City, State, Zip</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Email: info@ourhospital.com</p>
        </div>

        {/* Social Media & Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-blue-300 hover:text-white">Facebook</a>
            <a href="https://twitter.com" className="text-blue-300 hover:text-white">Twitter</a>
            <a href="https://instagram.com" className="text-blue-300 hover:text-white">Instagram</a>
          </div>
          <h3 className="text-lg font-semibold mb-2">Operating Hours</h3>
          <p className="text-sm">Mon - Fri: 8:00 AM - 8:00 PM</p>
          <p className="text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} Our Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
