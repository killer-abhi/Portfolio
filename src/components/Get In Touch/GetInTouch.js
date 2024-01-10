import React from "react";

import classes from "./GetInTouch.module.css";
import ContactForm from "./ContactForm";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';

import PersonalData from "../../Data/PersonalData";
import { useSelector } from "react-redux";

const data = [PersonalData.address,PersonalData.email, PersonalData.mobNo];

const GetInTouch = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    const Icons=[<LocationOnIcon fontSize="large"/>,<SendIcon fontSize="large"/>,<CallIcon fontSize="large"/>];

    const contactDetails = data.map((item, index) =>
        <div className={classes.contactCard} style={{color:nonThemeColor}} key={index}>
            <div className={classes.contactIcon} style={{backgroundColor:uiColor}}>{Icons[index]}</div>
            <div className={classes.contactValue}>{item}</div>
        </div>
    );

    return (
        <div className={classes.getInTouch} style={{borderColor:uiColor}}>
            <div className={classes.getInTouchCard}>
                <h1 style={{color:nonThemeColor}}>Get In Touch</h1>
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