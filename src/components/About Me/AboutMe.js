import React from 'react';

import classes from './aboutMe.module.css';
import AvatarImg from '../asset/profileImage2.png'

import SocialLinks from '../SocialLinks/SocialLinks';
import Button from "../UI/Button";
import GetInTouch from '../Get In Touch/GetInTouch';
const AboutMe = (props) => {

    return (
        <>
            <div className={classes.contactMe}>
                <div className={classes.avatar}>
                    <img src={AvatarImg} alt="" />
                </div>
                <div className={classes.contactCard}>
                    <h1>About Me</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam illo vel necessitatibus nisi, ab quo delectus tenetur qui sapiente perferendis nesciunt fuga consequatur dignissimos consequuntur quisquam fugit possimus accusantium?</div>
                    <div className={classes.contactLinks}>
                        <SocialLinks className={classes.links} />
                    </div>
                    <Button className={classes.resumeBtn}>See My Resume</Button>
                </div>
            </div>
            <GetInTouch />
        </>
    )
};
export default AboutMe;