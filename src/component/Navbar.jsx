import React, { useState } from "react";
import Logo from "../images/log.png";
import Open from "../images/open.png";
import Close from "../images/close.png";
import { FaLinkedin } from "react-icons/fa";
import sit_table from "../images/sit_table.gif";

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="nav_bar">
      <a href="https://sayeedthedev.web.app/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <h3 className="im">A Code Whisperer</h3>
      <div className="mobile_navbar">
        <div className="open_Panel" onClick={togglePanel}>
          <img
            id="open_image"
            style={{ display: isPanelOpen ? "none" : "block" }}
            src={Open}
            alt="open"
          />
        </div>
        <div className="close_Panel" onClick={togglePanel}>
          <img
            id="close_image"
            style={{ display: isPanelOpen ? "block" : "none" }}
            src={Close}
            alt="close"
          />
        </div>
        <div
          className="panel"
          id="panel"
          style={{ display: isPanelOpen ? "block" : "none" }}
        >
          <div className="contact">
            <div className="imageCard">
              <img src={sit_table} alt="contact" />
            </div>
            <div className="contactLink">
              <h3>Sayeed Ahmed</h3>
              <a
                href="https://twitter.com/sayeed__ajmal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 style={{ margin: 0 }}>@sayeed-ajmal</h6>
              </a>
              <div className="links">
                <a
                  href="https://www.instagram.com/sayeed__ajmal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icons"
                    src="/images/instagram_black.png"
                    alt="instagram"
                  />
                </a>
                <a
                  href="https://wa.me/919964716450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icons"
                    src="/images/whatsapp-black.png"
                    alt="whatsapp"
                  />
                </a>
                <a
                  href="https://github.com/sayeedajmal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icons"
                    src="/images/github_black.png"
                    alt="github"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayeedajmal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <h5
                style={{
                  color: "gray",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                A software Engineer with achieving Dreams.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
