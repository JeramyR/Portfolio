import React from "react";
import "./skills.css";
import * as dots from "../../../assets/background/dots.png";
import * as splash from "../../../assets/background/homeSplash.png";
import * as circles from "../../../assets/photos/skillsCircles.png";
import * as typing from "../../../assets/photos/typingPic.png";

export const Skills = () => {
  return (
    <>
      <img
        src={splash.default}
        alt="splash decoration"
        className="skills-splash"
      />
      <img src={dots.default} alt="splash background" className="skills-dots" />
      <section className="skills-outer-container">
        <div className="skills-left-container">
          <h1 className="skills-title skills-margin">Skills</h1>
          <p className="skills-blurb skills-margin">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between.
          </p>
          <img
            src={circles.default}
            alt="skill levels for technology types"
            className="skills-circles-picture skills-margin"
          />
        </div>
        <div className="skills-right-container">
          <img
            src={typing.default}
            className="skills-typing-picture"
            alt="person working on keyboard"
          />
        </div>
      </section>
    </>
  );
};
