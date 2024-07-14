import React from "react";
import "./App.css";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Navbar from "./component/Navbar";
import ProjectTemplate from "./component/ProjectTemplate";
import Skills from "./component/Skills";
import "./desk.css";
import table from "./images/sit_table.gif";
import bloodDonation from "./images/BloodDonation.gif";

const projects = [
  {
    title: "Blood Donation | API | WEB",
    imgSrc: { bloodDonation },
    altText: "Blood Donation",
    description: [
      "Developed a user-friendly interface for donors and healthcare professionals to interact with the system.",
      "Developed a robust Restful API for Blood Donation management.",
      "Having Main & Security Branches.",
      "Implemented a comprehensive system for tracking donor information, appointments, and medical history.",
      "Utilized Java and relevant frameworks to build the API, ensuring scalability and performance.",
      "Designed entities/models for Donor, BloodBank, Staff, Appointment, MedicalHistory, and Donation.",
      "Incorporated features such as donor registration, appointment scheduling, and medical history recording.",
      "Established relationships between entities to maintain data integrity and consistency.",
      "Implemented security measures to protect sensitive information and ensure data privacy.",
      "Created endpoints for CRUD operations on various entities, providing a user-friendly interface for interactions.",
      "Ensured proper error handling and response messages for a smooth user experience.",
      "Optimized database interactions for efficient data retrieval and storage.",
      "Conducted thorough testing to validate functionality, security, and overall system stability.",
      "Documented the API for easy integration and future maintenance.",
      "Addressed challenges with innovative problem-solving and continuous improvement.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/BloodDonation",
        text: "Github | Blood Donation 🌏",
      },
    ],
  },
];

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <img class="userImage" src={table} />
      <About />
      <Skills />
      {projects.map((project, index) => (
        <ProjectTemplate key={index} projectData={project} />
      ))}
      <ContactMe />
    </div>
  );
};

export default App;
