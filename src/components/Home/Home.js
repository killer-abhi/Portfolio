import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
import { autoTypeData } from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);
    function handleTyper() {
        let textItems = autoTypeData;
        var autoTyper = document.getElementById('typer');
        new Typewriter(autoTyper, {
            strings: textItems,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
        });
    }
    useEffect(
        handleTyper
    ,[]);
    return (
        <main id="home">
            <div className={classes.homeContent}>
                <h1 className={classes.greeting}>
                    Hi There !
                </h1>
                <h2>I'm &nbsp;<span id="name" style={{ color: uiColor }}>{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span></h2>
                <h3 style={{ color: nonThemeColor }}>
                    {PersonalData.nickName}
                </h3>
                <div className={classes.autoText}>
                    I am a &nbsp; <span id="typer" style={{ color: uiColor }}></span>
                </div>
                <p className={classes.connectText}>Feel free to <span style={{ color: uiColor }}>connect</span> with me.</p>
                <SocialLinks className={classes.links} />
            </div>
            <div className={classes.avatarImage}>
                <img src={profileAvatar} alt="" srcSet="" />
            </div>
        </main>
    )
}
export default Home;