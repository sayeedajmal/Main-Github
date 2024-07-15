import React from "react";
import "../App.css";

const ProjectTemplate = ({ projectData }) => {
  return (
    <div className="Projects">
      <h3>{projectData.title}</h3>
      <img
        src={projectData.imgSrc}
        alt={projectData.altText}
        style={{ background: "white", borderRadius: "50%" }}
      />
      <ol style={{ marginLeft: "-1rem", marginTop: "0" }}>
        {projectData.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ol>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-evenly",
          overflow: "hidden",
          padding: "0.5rem",
        }}
      >
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
  );
};

export default ProjectTemplate;
