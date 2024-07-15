import React from "react";
import "./App.css";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Navbar from "./component/Navbar";
import ProjectTemplate from "./component/ProjectTemplate";
import Skills from "./component/Skills";
import "./desk.css";
import bloodDonation from "./images/BloodDonation.gif";
import connectX from "./images/ConnectX.png";
import dailyReminder from "./images/DailyReminder.webp";
import forecast from "./images/forecast.png";
import domino from "./images/pizza.png";
import quranFy from "./images/quranFy.gif";
import table from "./images/sit_table.gif";

const projects = [
  {
    title: "Blood Donation | API | WEB",
    imgSrc: bloodDonation,
    altText: "Blood Donation",
    description: [
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
      "Excited to contribute to the healthcare ecosystem with the Blood Donation API? Download this Project and Start Running Setup.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/BloodDonation/blob/Main/readme.md",
        text: "Github 🌏",
      },
      {
        href: "https://github.com/sayeedajmal/BloodDonation/tree/Main",
        text: "Download",
      },
      {
        href: "https://github.com/sayeedajmal/BloodDonation/blob/Main/setup.sh",
        text: "Setup",
      },
    ],
  },
  {
    title: "QuranFy | Audio Quran",
    imgSrc: quranFy,
    altText: "QuranFy",
    description: [
      "Developed Quranfy application for Quran listening with synchronized lyrics and a beautiful UI.",
      "Utilized Java, along with relevant frameworks and libraries, to build the Quranfy app.",
      "Designed a visually appealing and user-friendly interface for an immersive experience.",
      "Integrated high-quality Quran audio with seamless streaming and playback functionality.",
      "Implemented lyric synchronization for synchronized recitation and scrolling experience.",
      "Included search and navigation features for easy verse and chapter lookup.",
      "Offered customization options such as font size adjustment and background themes.",
      "Optimized performance for smooth audio playback and responsive user interface.",
      "Conducted comprehensive testing for stability, functionality, and compatibility.",
      "Overcame challenges with innovative problem-solving techniques.",
      "Identified lessons learned and potential future improvements for the Quranfy app.",
      "Excited to Use! Let's Download This Application.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/QuranFy/app-release.apk",
        text: "Download",
      },
    ],
  },
  {
    title: "ConnectX",
    imgSrc: connectX,
    altText: "ConnectX",
    description: [
      "Developed ConnectX app for seamless chatting with seen and active status, image sending, and beautiful UI.",
      "Utilized Firebase and APIs for real-time messaging, authentication, and database management.",
      "Designed intuitive UI for an enhanced chatting experience.",
      "Implemented seen and active status indicators for real-time message visibility.",
      "Enabled image sending functionality for easy sharing of visual content.",
      "Currently developing audio and video call features.",
      "Ensured data security and privacy through encryption.",
      "Conducted extensive testing for reliability and performance.",
      "Actively incorporated user feedback for continuous improvement.",
      "Incorporated a download option allowing visitors to access and install the app directly Here.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/ConnectX/app-release.apk",
        text: "v-2.1",
      },
    ],
  },
  {
    title: "Reminder | Faith",
    imgSrc: dailyReminder,
    altText: "Daily Reminder",
    description: [
      "Android-exclusive religious faith and practice notification app.",
      "Built using Google Firebase for reliable data management.",
      "Utilizes Volley API for notification delivery.",
      "Offers Dua's and Hadeeses content for users.",
      "User-friendly interface for easy navigation.",
      "Provides daily spiritual inspiration with quotes and scriptures.",
      "Enhances daily spiritual routines with timely reminders.",
      "Excited to Use! Let's Download This Application.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/DailyReminder/app-release.apk",
        text: "Download",
      },
    ],
  },
  {
    title: "Domino | Clone",
    imgSrc: domino,
    altText: "Domino Clone",
    description: [
      "Developed a clone of the Domino app for Android, focusing on recreating its UI/UX and core functionalities.",
      "Utilized Java, along with relevant frameworks and libraries, to build the Domino clone app.",
      "Implemented features such as food ordering, menu browsing, customization, and payment integration.",
      "Integrated a robust database system to manage user profiles, orders, and menu items.",
      "Optimized app performance through caching, code optimization, and network request enhancements.",
      "Conducted thorough testing, including manual and automated approaches, for stability and functionality.",
      "Gained valuable insights and identified areas for future improvements and enhancements.",
      "For Domino Business, Download App.",
      "Excited for Try! Let's Download This App.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/Domino_Clone/domino bussiness.apk",
        text: "Domino Business App",
      },
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/Domino_Clone/domino.apk",
        text: "App",
      },
    ],
  },
  {
    title: "Forecast | Weather App",
    imgSrc: forecast,
    altText: "Forecast",
    description: [
      "Current Weather: Get real-time weather information, including temperature, humidity, and wind speed.",
      "5-Day Forecast: Plan ahead with a detailed forecast for the next five days.",
      "3-Hourly Forecast: View weather predictions for every three hours throughout the day.",
      "Beautiful UI: Enjoy an attractive and user-friendly interface for a seamless experience.",
      "Volley & JSON Parsing: Efficiently fetch weather data using Volley library and parse JSON responses.",
      "API Integration: Integrate with weather APIs for accurate and reliable data.",
      "Location-Based: Access personalized weather forecasts based on your current or chosen location.",
      "Customization: Customize temperature units, language preferences, and notifications.",
      "Weather Alerts: Receive timely notifications for severe weather conditions.",
      "Offline Support: Access cached weather data even when offline.",
      "wanna Know your City weather or Forecast.. Install app.",
    ],
    links: [
      {
        href: "https://github.com/sayeedajmal/Applications/raw/master/Forecast/app-release.apk",
        text: "Download",
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
      <div class="about_header">
        <text>03.</text>
        <h4>Projects I've Build</h4>
        <br />
      </div>
      {projects.map((project, index) => (
        <ProjectTemplate key={index} projectData={project} />
      ))}
      <ContactMe />
    </div>
  );
};

export default App;
