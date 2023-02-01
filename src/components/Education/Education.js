import React from "react";

import EducationImg1 from "../asset/mortarboard-education.svg";
import EducationImg2 from "../asset/kindpng_1040086.png";
import EducationImg3 from "../asset/kindpng_1578281.png";
import EducationImg4 from "../asset/kindpng_2158189.png";

import Degree from "./Degree";
import "./education.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className="education">
            <div className="education-header">
                <div id="image">
                    <img src={EducationImg4} alt="" srcset="" />
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
        </div>
    )
}
export default Education;