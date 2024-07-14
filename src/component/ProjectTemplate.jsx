import React from "react";
import "../App.css";

const ProjectTemplate = ({ projectData }) => {
  return (
    <>
      <div class="about_header">
        <text>03.</text>
        <h4>Projects I've Build</h4>
        <br />
      </div>
      <div className="Projects">
        <h3>{projectData.title}</h3>
        <img
          src={projectData.imgSrc}
          alt={projectData.altText}
          style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "45%" }}
        />
        <ol style={{ marginLeft: "-1rem", marginTop: "0" }}>
          {projectData.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ol>
        <div style={{ display: "flex", gap: "2rem" }}>
          {projectData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectTemplate;
