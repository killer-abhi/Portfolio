import React, { Fragment } from "react";

import classes from "./aboutMe.module.css";
import Photo from "../../Data/profile-pic.jpg";
import PersonalData from "../../Data/PersonalData";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../UI/Button";
import GetInTouch from "../Get In Touch/GetInTouch";
import { useSelector } from "react-redux";
const AboutMe = () => {
  const uiColor = useSelector((state) => state.uiColor);

  return (
    <Fragment>
      <div className={classes.contactMe}>
        <div className={classes.avatar}>
          <img src={Photo} alt="" style={{ borderColor: uiColor }} />
        </div>
        <div className={classes.contactCard}>
          <h1 style={{ color: uiColor }}>About Me</h1>
          <div>{PersonalData.aboutMe}</div>
          <div className={classes.contactLinks}>
            <SocialLinks className={classes.links} />
          </div>
          <a href={PersonalData.resumeLink}>
            <Button className={classes.resumeBtn}>See My Resume</Button>
          </a>
        </div>
      </div>
      <GetInTouch />
    </Fragment>
  );
};
export default AboutMe;
