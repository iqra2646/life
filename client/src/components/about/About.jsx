// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <section className="p-10 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-700">About Us</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        Our hospital is dedicated to providing exceptional healthcare services with state-of-the-art facilities and a compassionate approach. We strive to improve lives through our commitment to excellence and patient-centered care.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Mission</h3>
          <p className="text-gray-700">
            To deliver high-quality healthcare that meets the needs of our community, promoting healing and wellness through compassion and professionalism.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Our Vision</h3>
          <p className="text-gray-700">
            To be a leading healthcare institution recognized for quality care, setting standards of excellence for others to follow.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">Core Values</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Respect</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
