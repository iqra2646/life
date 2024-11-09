import React from 'react';

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

const Departments = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Departments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={department.image} alt={department.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">{department.title}</h3>
            <p className="text-gray-600">{department.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
