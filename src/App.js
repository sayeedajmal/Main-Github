import React, { useEffect, useState } from "react";
import "./App.css";
import "./desk.css";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Navbar from "./component/Navbar";
import ProjectTemplate from "./component/ProjectTemplate";
import Skills from "./component/Skills";
import { fetchProjects } from "./FetchProjects";
import table from "./images/sit_table.gif";
import { urlFor } from "./imageUrlBuilder";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };

    getProjects();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <img className="userImage" src={table} alt="userImage" />
      <About />
      <Skills />
      <div className="about_header">
        <text>03.</text>
        <h4>Projects I've Built</h4>
        <br />
      </div>
      {projects.map((project, index) => (
        <ProjectTemplate
          key={index}
          projectData={{
            ...project,
            imgSrc: urlFor(project.imgSrc).url(),
          }}
        />
      ))}
      <ContactMe />
    </div>
  );
};

export default App;
