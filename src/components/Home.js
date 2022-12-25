import React, { useEffect } from "react";
import Data from "./Data";
import Typewriter from 'typewriter-effect/dist/core';
import "../css/home.css";
import CoverImg from "./asset/Web-Design-PNG-Transparent.png";

//icons
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
                    <div id="name-div">I'm <span id="name">{Data.personalData.firstName}&nbsp;{Data.personalData.lastName}</span></div>
                    <div id="nick-name">
                        {Data.personalData.nickName}
                    </div>
                </div>
                <div className="rolling-text">
                    I am a &nbsp; <span id="typer"></span>
                </div>
                <div className="connect">
                    <div className="connect-link centered"><GitHubIcon fontSize="large" /></div>
                    <div className="connect-link centered"><LinkedInIcon fontSize="large" /></div>
                    <div className="connect-link centered"><TwitterIcon fontSize="large" /></div>
                    <div className="connect-link centered"><InstagramIcon fontSize="large" /></div>
                    <div className="connect-link centered"><EmailIcon fontSize="large" /></div>
                </div>
            </div>
            <div className="cover-image">
                <img src={CoverImg} height="400px" width="600px" alt="" srcSet="" />
            </div>
        </div>
    )
}
export default Home;