import React from "react";

import "./degree.css";
import image from "../asset/uptu_logo.png";

import Card from "../UI/Card";
import EducationData from "../Data/EducationData"
import { useSelector } from "react-redux";

function Degree(props) {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className="degree">
            <div id="title" style={{color:nonThemeColor}}>
                Degree Pursuing
            </div>
            <div className="degree-card">
                <div className="centered" id="img">
                    <img src={image} alt="degree" srcset="" />
                </div>
                <Card className="degree-wrapper">
                    <div className="degree-info" style={{color:"purple"}}>
                        <div id="course-duration" style={{color:nonThemeColor}}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</div>
                        <div id="college-name">{EducationData.collegeName}</div>
                        <div id="course" style={{color:nonThemeColor}}>{EducationData.courseName}</div>
                    </div>
                    <div className="details">
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores adipisci perspiciatis nobis velit, corrupti sed maxime minus! Harum, perferendis.</p>
                            </li>
                        </ul>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Degree;