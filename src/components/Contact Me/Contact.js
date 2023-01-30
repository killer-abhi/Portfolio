import React from 'react';

import classes from './contactMe.module.css';
import AvatarImg from '../asset/profileImage2.png'

import SocialLinks from '../SocialLinks/SocialLinks';
import Button from "../UI/Button";
import GetInTouch from '../Get In Touch/GetInTouch';
const ContactMe = (props) => {

    return (
        <>
            <div className={classes.contactMe}>
                <div className={classes.avatar}>
                    <img src={AvatarImg} alt="" />
                </div>
                <div className={classes.contactCard}>
                    <h1>Contact Me</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae itaque praesentium eos. Quos maiores animi, dolorem impedit magnam itaque iusto sequi aliquam labore nesciunt fuga illo beatae sunt? Sapiente pariatur quas nulla reprehenderit voluptate. Quaerat cum dolor deleniti fugit, numquam cupiditate ipsam fugiat eum sint deserunt, explicabo, officia maiores!</div>
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
export default ContactMe;