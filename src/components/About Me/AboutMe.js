import React, { Fragment } from 'react';

import classes from './aboutMe.module.css';
import AvatarImg from '../asset/profileImage2.png'
import PersonalData from '../../Data/PersonalData';
import SocialLinks from '../SocialLinks/SocialLinks';
import Button from "../UI/Button";
import GetInTouch from '../Get In Touch/GetInTouch';
const AboutMe = (props) => {

    return (
        <Fragment>
            <div className={classes.contactMe}>
                <div className={classes.avatar}>
                    <img src={AvatarImg} alt="" />
                </div>
                <div className={classes.contactCard}>
                    <h1>About Me</h1>
                    <div>
                        {PersonalData.aboutMe}
                    </div>
                    <div className={classes.contactLinks}>
                        <SocialLinks className={classes.links} />
                    </div>
                    <Button className={classes.resumeBtn}>See My Resume</Button>
                </div>
            </div>
            <GetInTouch />
        </Fragment>
    )
};
export default AboutMe;