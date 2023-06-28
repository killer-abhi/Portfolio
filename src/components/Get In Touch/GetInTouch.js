import React from "react";

import classes from "./GetInTouch.module.css";
import ContactForm from "./ContactForm";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import PersonalData from "../../Data/PersonalData";
import { useSelector } from "react-redux";

const data = [PersonalData.address, PersonalData.email, PersonalData.mobNo];

const GetInTouch = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const Icons = [
    // <LocationOnIcon fontSize="large" />,
    <SendIcon fontSize="large" />,
  ];

  return (
    <div className={classes.getInTouch} style={{ borderColor: uiColor }}>
      <div className={classes.getInTouchCard}>
        <h1 style={{ color: nonThemeColor }}>Get In Touch</h1>
        <p>
          Please feel free to email me with any questions regarding employment
          or other general interests.
        </p>
        <div className={classes.contactCard} style={{ color: uiColor }}>
          <div
            className={classes.contactIcon}
            style={{ backgroundColor: uiColor }}
          >
            {Icons[0]}
          </div>
          <div className={classes.contactValue}>gilb9711@gmail.com</div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
export default GetInTouch;
