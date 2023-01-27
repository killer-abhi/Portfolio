import React, { useEffect } from "react";
import Data from "../Data";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";

import "./home.css";

import SocialLinks from "../SocialLinks/SocialLinks";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {
    function handleTyper(){
        let textItems = Data.typerStrings;
        var autoTyper = document.getElementById('typer');
        console.log(autoTyper);
        new Typewriter(autoTyper, {
    
            strings: textItems,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
        });
    }
    useEffect(
        handleTyper,
        []
    );
    return (
        <div className="Home centered">
            <div className="home-content">
                <div className="personal-info">

                    <div className="greeting">
                        Hi There !
                    </div>
                    <div id="name-div">I'm <span id="name" style={{color:Data.extraColors[0]}}>{Data.personalData.firstName}&nbsp;{Data.personalData.lastName}</span></div>
                    <div id="nick-name">
                        {Data.personalData.nickName}
                    </div>
                </div>
                <div className="rolling-text">
                    I am a &nbsp; <span id="typer" style={{color:Data.extraColors[0]}}></span>
                </div>
                <SocialLinks className="connect"/>
            </div>
            <div className="cover-image">
                <img src={profileAvatar} alt="" srcSet="" />
            </div>
        </div>
    )
}
export default Home;