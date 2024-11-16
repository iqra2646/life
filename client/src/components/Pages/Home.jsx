import React from 'react';
import { NavLink } from 'react-router-dom';

const departments = [
  {
    title: "Emergency Department",
    description: "Provides immediate care for acute illnesses and injuries.",
    image: "https://img.freepik.com/free-photo/british-ambulance-parked-parking-lot_53876-63438.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Radiology",
    description: "Uses imaging techniques to diagnose and treat conditions.",
    image: "https://img.freepik.com/free-photo/two-attractive-young-doctors-looking-x-ray-results_155003-1565.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Laboratory",
    description: "Conducts tests on blood, urine, and other samples to assist in diagnosis.",
    image: "https://img.freepik.com/premium-photo/young-scientists-research-investigations-medical-laboratory-using-microscope_1054941-48846.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Gynecology",
    description: "Specializes in women's reproductive health.",
    image: "https://img.freepik.com/premium-photo/man-woman-are-looking-pregnant-woman_1314467-71111.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Cardiology",
    description: "Focuses on diagnosing and treating heart conditions.",
    image: "https://img.freepik.com/premium-photo/person-holding-anatomic-heart-model-educational-purpose_1026950-54602.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Intensive Care Medicine",
    description: "Provides critical care for patients with severe or life-threatening illnesses.",
    image: "https://img.freepik.com/free-photo/sick-elderly-man-with-health-problems-staying-hospital-ward-bed-prepared-medical-treatment-patient-with-nasal-oxygen-tube-oximeter-waiting-cure-heavy-illness-disease_482257-30128.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Pediatrics",
    description: "Specializes in medical care for infants, children, and adolescents.",
    image: "https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224183.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Orthopedics",
    description: "Focuses on the musculoskeletal system, including bones and joints.",
    image: "https://5.imimg.com/data5/RP/UV/GLADMIN-61235745/orthopaedic-surgery-500x500.png"
  },
  {
    title: "Dermatology",
    description: "Deals with skin, hair, and nail conditions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmE7gnm2kScwB8Ty_AhSb1hcaKvSWCbV6j8kKs44AUaVXNcSlnibKseoYoQclB6vlwvA&usqp=CAU"
  },
  {
    title: "Oncology",
    description: "Specializes in the diagnosis and treatment of cancer.",
    image: "https://www.shutterstock.com/image-photo/woman-receiving-radiation-therapy-treatments-260nw-1091529116.jpg"
  },
  {
    title: "Psychiatry",
    description: "Focuses on mental health and emotional disorders.",
    image: "https://img.freepik.com/free-photo/contemplated-psychologist-holding-colored-blue-pencil-clipboard-sitting-front-sad-girl-sitting-sofa_23-2148026251.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Neurology",
    description: "Specializes in disorders of the nervous system.",
    image: "https://img.freepik.com/free-photo/specialist-neurologist-doctor-taking-notes-laptop-asking-patient-s-symptoms-adjusting-high-tech-eeg-headset-doctor-researcher-controlling-eeg-headset-analyzing-brain-functions-health-status_482257-16448.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
  {
    title: "Gastroenterology",
    description: "Focuses on digestive system health.",
    image: "https://img.freepik.com/premium-photo/gastroenterology-doctor-online-service-platform-idea-health-care-stomach-treatment-doctor-examine-internal-organ-online-magazine_968529-294868.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid"
  },
];

const Service = [
  {
    title: "Telemedicine",
    description: "Consult with our doctors remotely via video or chat.",
    image: "https://img.freepik.com/free-photo/african-american-nurse-clinic-desk-listening-general-practitioner-collegue-doctor-video-conferencing-medical-team-telemedicine-call-busy-modern-hospital-office_482257-64615.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Nutrition Counseling",
    description: "Personalized nutrition plans to support your health.",
    image: "https://img.freepik.com/premium-photo/nutritionist-working-office-doctor-writing-diet-plan-table-using-vegetables-sport_660230-133381.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Chronic Disease Management",
    description: "Comprehensive care for chronic conditions.",
    image: "https://img.freepik.com/free-photo/front-view-colleagues-working-covid_23-2148616734.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Mental Health Support",
    description: "Counseling and therapy services for mental well-being.",
    image: "https://img.freepik.com/free-photo/woman-with-anger-management-issues-talking-about-addiction-with-people-aa-therapy-meeting-angry-person-having-desperate-reaction-while-attending-rehabilitation-program-session_482257-33662.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },

];

const Home = () => {
  return (
    <div className="bg-gray-100 text-white">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url("https://example.com/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-gray-500"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Al-Aqsa Medical Centre</h1>
          <p className="text-lg mb-8">Providing compassionate care for a healthier tomorrow</p>
         <button> <NavLink to="services" className="bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-lg font-semibold transition duration-300">Our Services</NavLink></button>
        </div>
      </header>

      {/* Services Section */}
      <div className="">
      <h2 className="text-4xl font-bold text-center  mt-6 text-gray-800 mb-6">Our Specialized Services</h2>
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
        {Service.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden mx-16 my-16 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Health Tips Section */}
      <section className="py-16 px-8 bg-green-50">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Health Tips</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Stay Hydrated', description: 'Drink at least 8 glasses of water daily for optimal health.' },
            { title: 'Exercise Regularly', description: 'Aim for at least 30 minutes of exercise every day.' },
            { title: 'Get Adequate Sleep', description: 'Sleep 7-8 hours each night to allow your body to recover.' },
          ].map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-500">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-6">Book an Appointment</h1>
        <p className="text-lg mb-10 text-gray-500">Schedule a consultation with our specialists easily.</p>
        <NavLink to="/appointment" className="bg-green-600 hover:bg-green-500 text-white py-3 px-8 rounded-lg font-semibold transition duration-300">Book Now</NavLink>
      </section>

      {/* Doctors Section */}
      <section className="bg-green-50 py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Meet Our Doctors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Dr. John Doe', specialty: 'Cardiology', imageUrl: 'https://img.freepik.com/free-photo/specialist-male-doctor-having-his-arms-crossed_23-2148525088.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
            { name: 'Dr. Jane Smith', specialty: 'Neurology', imageUrl: 'https://img.freepik.com/free-photo/doctor-wearing-white-coat-medium-shot_23-2149844579.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
            { name: 'Dr. Emily White', specialty: 'Orthopedics', imageUrl: 'https://img.freepik.com/free-photo/portrait-young-african-american-woman-doctor-against-blue-background_93675-132921.jpg?uid=R172826343&ga=GA1.1.421194447.1722059295&semt=ais_hybrid' },
          ].map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-80 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-green-600">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations & Awards Section */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Our Accreditations & Awards</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: 'National Healthcare Excellence Award', year: '2022' },
            { title: 'Patient Care Excellence Certification', year: '2023' },
          ].map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-green-600">{award.title}</h3>
              <p className="text-gray-600">{award.year}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Contact Section */}
      <section className="bg-gray-500  text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">Have any questions? Get in touch with us for more information.</p>
        <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="tel:+1234567890" className="bg-green-600 hover:bg-green-800 py-3 px-8 rounded-lg font-semibold transition duration-300">Call Us</a>
          <a href="mailto:info@hospital.com" className="bg-green-600 hover:bg-green-800 py-3 px-8 rounded-lg font-semibold transition duration-300">Email Us</a>
          <a href="#visit" className="bg-green-600 hover:bg-green-800 py-3 px-8 rounded-lg font-semibold transition duration-300">Visit Us</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
