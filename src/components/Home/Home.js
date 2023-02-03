import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.css";
import {autoTypeData} from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    function handleTyper(){
        let textItems = autoTypeData;
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
                {/* <div className="personal-info"> */}
                    <div className="greeting">
                        Hi There !
                    </div>
                    <div id="name-div">I'm &nbsp;<span id="name" style={{color:'purple'}}>{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span></div>
                    <div id="nick-name" style={{color:nonThemeColor}}>
                        {PersonalData.nickName}
                    </div>
                {/* </div> */}
                <div className="rolling-text">
                    I am a &nbsp; <span id="typer" style={{color:'purple'}}></span>
                </div>
                <p className="connect-text">Feel free to <span style={{color:'purple'}}>connect</span> with me.</p>
                <SocialLinks className="connect"/>
            </div>
            <div className="cover-image">
                <img src={profileAvatar} alt="" srcSet="" />
            </div>
        </div>
    )
}
export default Home;