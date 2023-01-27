import React from "react";

import Data from "../Data";

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import classes from "./socialLinks.module.css";

const SocialLinks = (props) => {

    return (
        <div className={`${classes.socialLinks} ${props.className}`}>
            <a href={Data.profileLinks.githubLink}><GitHubIcon fontSize="large" /></a>
            <a href={Data.profileLinks.linkedInLink}><LinkedInIcon fontSize="large" /></a>
            <a href={Data.profileLinks.twitterLink}><TwitterIcon fontSize="large" /></a>
            <a href={Data.profileLinks.instaLink}><InstagramIcon fontSize="large" /></a>
            <a href={Data.profileLinks.emailLink}><EmailIcon fontSize="large" /></a>

        </div>
    )
};
export default SocialLinks;