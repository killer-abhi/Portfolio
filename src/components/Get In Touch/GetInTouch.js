import React from "react";

import classes from "./GetInTouch.module.css";
import ContactForm from "./ContactForm";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';

const DUMMY_DATA = ['Location', 'email', '8728782782'];

const GetInTouch = (props) => {

    const Icons=[<LocationOnIcon fontSize="large"/>,<SendIcon fontSize="large"/>,<CallIcon fontSize="large"/>];

    const contactDetails = DUMMY_DATA.map((item, index) =>
        <div className={classes.contactCard} key={index}>
            <div className={classes.contactIcon}>{Icons[index]}</div>
            <div className={classes.contactValue}>{item}</div>
        </div>
    );

    return (
        <div className={classes.getInTouch}>
            <div className={classes.getInTouchCard}>
                <h1>Get In Touch</h1>
                <p>I would love to hear from you, so whether you need a quote, have a question or just want to say hello, please feel free to drop me a line.</p>
                <div>
                    {contactDetails}
                </div>
            </div>
            <ContactForm/>
        </div>
    )
};
export default GetInTouch;