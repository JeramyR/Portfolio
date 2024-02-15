import React from "react";
import "./home.css";
import * as background from "../../../assets/background/homeSplash.png";
import * as smallSplash from "../../../assets/background/buttonSplash.png";
import * as git from "../../../assets/icons/git.png";
import * as eMail from "../../../assets/icons/greyMail.png";
import * as linkedIn from "../../../assets/icons/linkedin.png";

export const Home = () => {
  return (
    <>
      <img
        src={smallSplash.default}
        alt="splash decoration"
        className="smallSplash"
      />
      <img
        src={background.default}
        alt="splash background"
        className="splashBG"
      />
      <div className="home-landing">
        <section className="home-section">
          <h1 className="londrina-shadow-regular home-margin">JERAMY REID</h1>
          <p className="home-description home-margin">
            Junior Full-Stack Developer + Engineer
          </p>
          <div className="home-contact-icons home-margin">
            <div className="home-container-spacer">
              <div className="home-icon">
                <a href="https://www.linkedin.com/in/jeramy-reid-651738ba/">
                  <img src={linkedIn.default} className="home-image" />
                </a>
              </div>
              <div className="home-icon">
                <a href="https://github.com/JeramyR">
                  <img src={git.default} className="home-image" />
                </a>
              </div>
              <div className="home-icon">
                <a href="">
                  <img src={eMail.default} className="home-image" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
