import React from "react";

const Project = () => {
  const projectData = [
    {
      name: "BlockchainEDU",
      description:
        "BlockchainEDU is a blockchain-based solution developed to revolutionize the management and verification of academic records within educational institutions. The project aims to offer a secure, transparent, and immutable system that ensures the integrity of academic credentials. By utilizing blockchain technology, BlockchainEDU enhances data protection and provides real-time verification, eliminating the need for third-party verification.",
      imageUrl: "/assets/bte.png",
    },
    {
      name: "Auto Generate Time Table Website",
      description:
        "This project is an auto-generated time table website developed using HTML, CSS, PHP, and MySQL for the database. It allows educational institutions to generate schedules automatically, minimizing manual work and ensuring optimal use of resources. The project integrates a user-friendly interface with a backend database to dynamically create time tables based on predefined rules and data input.",
      imageUrl: "/assets/timetable.jpg",
    },
    {
      name: "Fleet Ride Website",
      description:
        "The Fleet Ride Website is built using HTML for the structure, CSS for styling, and PHP for dynamic selection and server-side functionality. The project allows users to book rides from a fleet of vehicles. It provides a clean and responsive interface with an option to select vehicles, view their availability, and make reservations directly from the website. PHP is used to handle user selection, manage booking details, and integrate with a backend database.",
      imageUrl: "/assets/fleet-ride.jpg", 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title and Punchline */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold  mb-4">Our Latest Projects</h1>
        <p className="text-xl text-gray-500">Innovative solutions powered by technology to simplify and improve everyday life.</p>
      </div>

      {/* Projects List */}
      {projectData.map((project, index) => (
        <div key={index} className="text-center mb-16">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
            src={project.imageUrl}
            alt={project.name}
          />
          <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
          <p className="text-lg text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
