import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
// import { autoTypeData } from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  // function handleTyper() {
  //   let textItems = autoTypeData;
  //   var autoTyper = document.getElementById("typer");
  //   new Typewriter(autoTyper, {
  //     strings: textItems,
  //     autoStart: true,
  //     pauseFor: 1000,
  //     loop: true,
  //   });
  // }
  // useEffect(handleTyper, []);
  return (
    <main>
      <div className={classes.homeContent}>
        <h1 className={classes.greeting}>Hi there !</h1>
        <h2>
          I'm &nbsp;
          <span id="name" style={{ color: uiColor }}>
            {PersonalData.firstName}
          </span>
        </h2>
        <h3 style={{ color: nonThemeColor }}>{PersonalData.nickName}</h3>
        <div>I am a full-stack web developer.</div>
        <p className={classes.connectText}>
          Feel free to <span style={{ color: uiColor }}>connect</span> with me.
        </p>
        <SocialLinks className={classes.links} />
      </div>
    </main>
  );
}
export default Home;
