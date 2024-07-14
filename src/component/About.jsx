import React from "react";
import profile from "../images/profile.png";

const About = () => {
  return (
    <div className="container">
      <h2 style={{ fontSize: "2rem" }}>Hey, I am</h2>
      <h5 style={{ marginLeft: "2rem" }}>Sayeed Ahmed.</h5>
      <h2 style={{ color: "#c4deff" }}>
        Adept at backend development, API creation, database management, Linux
        systems, application development, and proficient in various coding
        languages. Experienced in project management using office tools.
      </h2>
      <p>
        A Java FullStack Software Developer specializing in building exceptional
        digital experiences. Currently, I’m focused on building accessible
        ConnectX
        <a
          href="https://github.com/sayeedajmal/Applications/raw/master/ConnectX/app-release.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          v-2.2
        </a>
        , QuranFy
        <a
          href="https://github.com/sayeedajmal/Applications/raw/master/QuranFy/app-release.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          v-2.5
        </a>{" "}
        & BloodDonation-API
        <a
          href="https://github.com/sayeedajmal/BloodDonation"
          target="_blank"
          rel="noopener noreferrer"
        >
          V-3.0
        </a>{" "}
        that's configured with flexibility and security Integrated of JWT
        Authentication.
      </p>
      <a
        className="github"
        href="https://github.com/sayeedajmal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github 👨🏻‍💻
      </a>
      <div class="about_header">
        <text>01.</text>
        <h4>About Me</h4>
        <br />
      </div>

      <a class="gallery" href="">
        Gallery 🤍
      </a>

      <div class="avtar">
        <img src={profile} />
      </div>

      <div class="about">
        <p>
          I completed my <b>B.E. in CSE</b> in 2024, following a Diploma in
          <b>CSE</b>. My passion for creating things on the internet inspired me
          to become a Java FullStack developer. I have been interested in web
          development, backend development, and API development since 2019.
        </p>
      </div>
    </div>
  );
};

export default About;
