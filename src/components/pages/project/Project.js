import React, { useState, useEffect } from "react";
import "./project.css";
import Carousel from "../../carousel/Carousel";
import * as dots from "../../../assets/background/dots.png";
import * as sideSplash from "../../../assets/background/sideSplah.png";
import * as git from "../../../assets/icons/git.png";
import * as cell from "../../../assets/photos/cell.png";
import * as demo from "../../../assets/photos/demoFalseReg.png";
import * as log from "../../../assets/photos/login.png";
import * as reg from "../../../assets/photos/registration.png";
import * as construction from "../../../assets/photos/construction.png";

const Projects = () => {
  const htmlArray = [construction];
  const cssArray = [cell, log, reg];
  const jsArray = [construction];
  const reactArray = [demo];
  const javaArray = [construction];

  const [selectedArray, setSelectedArray] = useState([]);
  useEffect(() => {
    setSelectedArray(htmlArray);
  }, []);
  const handleClick = (array) => {
    setSelectedArray(array);
  };
  return (
    <>
      <img src={dots.default} alt="backgound dots" className="project-dotBG" />
      <img
        src={sideSplash.default}
        alt="backgound splash"
        className="project-splashBG"
      />
      <div className="project-landing">
        <div className="project-example-container">
          {selectedArray.length > 0 && <Carousel pictures={selectedArray} />}
        </div>
        <section className="project-right-container">
          <div className="project-center">
            <h1 className="project-title margin">Projects</h1>
            <p className="project-blurb margin">
              An inquisitive Junior Web Developer and Engineer, skilled in
              leadership, seeking to leverage solid development skills with
              focus on collaboration, communication, and passion.
            </p>
            <div className="project-types margin">
              <button
                className="project-buttons"
                onClick={() => handleClick(htmlArray)}
              >
                HTML
              </button>
              <button
                className="project-buttons"
                onClick={() => handleClick(cssArray)}
              >
                CSS
              </button>
              <button
                className="project-buttons"
                onClick={() => handleClick(jsArray)}
              >
                Java Script
              </button>
              <button
                className="project-buttons"
                onClick={() => handleClick(reactArray)}
              >
                ReactJS
              </button>
              <button
                className="project-buttons"
                onClick={() => handleClick(javaArray)}
              >
                Java
              </button>
            </div>
            <div className="project-github margin">
              <img src={git.default} alt="git icon" />
            </div>
            <div className="project-choices-container margin">
              <div className="project-choice">
                <div className="project-choice-count">{`${selectedArray.length}`}</div>
                <div className="project-choice-slider"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Projects;
