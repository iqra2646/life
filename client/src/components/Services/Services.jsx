import React from 'react';

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
  {
    title: "Physical Therapy",
    description: "Rehabilitation services to improve mobility and reduce pain.",
    image: "https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071499.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Dental Care",
    description: "Comprehensive dental services for a healthy smile.",
    image: "https://img.freepik.com/free-photo/african-american-man-patient-dental-chair-dentist-office-doctor-practice-concept-professional-dentist-helping-his-patient-dentistry-medical_627829-13719.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Immunization Services",
    description: "Vaccinations and immunizations for all ages.",
    image: "https://img.freepik.com/free-photo/woman-getting-vaccine_23-2149014372.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
  {
    title: "Women's Health Services",
    description: "Specialized care for women's health needs.",
    image: "https://img.freepik.com/premium-photo/group-young-african-medical-workers-white-background_255667-8387.jpg?ga=GA1.1.328170918.1722506408&semt=ais_hybrid",
  },
];

const Services = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Specialized Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {Service.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
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
  );
};

export default Services;
