import React from "react";

import EducationImg from "../asset/kindpng_2158189.png";

import Certifications from "../Certifications/Certifications";
import Degree from "./Degree";
import "./education.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className="education">
            <div className="education-header">
                <div id="image">
                    <img src={EducationImg} alt="" srcset="" />
                </div>
                <div className="coding-profile">
                    <div id="coding-title">
                        <p id="sub-title1">Education</p>
                        <p id="sub-title2" style={{color:nonThemeColor}}>Basic Education and Qualifications</p>
                    </div>
                    <div className="coding-profile-links centered">
                        <div className="links">link1</div>
                        <div className="links">link2</div>
                        <div className="links">link3</div>
                        <div className="links">link4</div>
                    </div>
                </div>
            </div>
            <Degree/>
            <Certifications/>
        </div>
    )
}
export default Education;