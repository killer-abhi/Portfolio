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
                <div className="connect centered">
                    <div className="connect-link centered"><a href={Data.profileLinks.githubLink}><GitHubIcon fontSize="large" /></a></div>
                    <div className="connect-link centered"><a href={Data.profileLinks.linkedInLink}><LinkedInIcon fontSize="large" /></a></div>
                    <div className="connect-link centered"><a href={Data.profileLinks.twitterLink}><TwitterIcon fontSize="large" /></a></div>
                    <div className="connect-link centered"><a href={Data.profileLinks.instaLink}><InstagramIcon fontSize="large" /></a></div>
                    <div className="connect-link centered"><a href={Data.profileLinks.emailLink}><EmailIcon fontSize="large" /></a></div>

                    {/* {
                        Data.Links.map((item,index)=>{
                            return(
                                <div className="connect-link centered"><a href={Data.Links[index]}><GitHubIcon fontSize="large"/></a></div>
                            )
                        })
                    } */}

                </div>
            </div>
            <div className="cover-image">
                <img src={CoverImg} alt="" srcSet="" />
            </div>
        </div>
    )
}
export default Home;