import React,{useState} from "react";

import classes from "./contactForm.module.css";
import Button from "../UI/Button";

const ContactForm=(props)=>{

    const [btnText,setBtnText]=useState('Send Message');

    const submitHandler=(event)=>{
        event.preventDefault();
        setBtnText((prevValue)=>'Thank You')
    }
    return (
        <div className={classes.contactFormCard}>
            <h1>Leave A Message</h1>
            <form action="" className={classes.contactForm}>
                <input type="text" id="fName"  className={classes.Inputs} placeholder="First Name"/>
                <input type="text" id="lName" className={classes.Inputs} placeholder="Last Name"/>
                <input id='email' type="email" className={classes.Inputs} placeholder="Email"/>
                <input id="phone" type="text" className={classes.Inputs} placeholder="Phone"/>
                <textarea className={classes.Inputs} name="message" id="textMessage" placeholder="Message" cols="" rows="5"></textarea>
            <Button onClick={submitHandler} className={classes.sendBtn} type="submit">{btnText}</Button>
            </form>
        </div>
    )
};

export default ContactForm;
