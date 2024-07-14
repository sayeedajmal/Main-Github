import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div className="Footer">
        <div className="contact_links">
          <a
            href="https://twitter.com/sayeed__ajmal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="contact_icon" />
          </a>
          <a
            href="https://www.instagram.com/sayeed__ajmal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contact_icon" />
          </a>
          <a
            href="https://wa.me/919964716450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contact_icon" />
          </a>
          <a
            href="https://github.com/sayeedajmal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sayeedajmal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact_icon" />
          </a>
        </div>
      </div>
      <h2
        style={{
          color: "white",
          fontSize: "1rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Designed by Sayeed Ahmed
      </h2>
    </>
  );
};

export default ContactMe;
