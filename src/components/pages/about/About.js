import React from "react";
import "./about.css";
import * as topLeft from "../../../assets/background/topLeftSplash.png";
import * as bottomRight from "../../../assets/background/bottomRight.png";
import * as dots from "../../../assets/background/dots.png";
import * as myPhoto from "../../../assets/photos/myPhoto.jpg";

export const About = () => {
  return (
    <>
      <img
        src={topLeft.default}
        className="about-topleft"
        alt="splash background"
      />
      <img
        src={bottomRight.default}c
        className="about-bottomRight"
        alt="splash background"
      />
      <div className="about-landing-container">
        <section className="about-landing-left-section">
          <img src={dots.default} className="about-dots" alt="dots" />
          <img src={myPhoto.default} className="about-myphoto" alt="me" />
        </section>

        <section className="about-landing-right-section">
          <h1 className="about-title">About Me</h1>
          <p className="about-paragraph-blurb">
              I am an inquisitive Computer Science & Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication, and passion.
          </p>
          <button className="about-resume-btn"><span>Download CV </span></button>
        </section>
      </div>
    </>
  );
};
