import React from "react";

import "./degree.css";
import UniversityImg from "../../Data/universityLogo.png";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"
import { useSelector } from "react-redux";

function Degree(props) {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className="degree">
            <h1 style={{color:nonThemeColor}}>
                Degree Pursuing
            </h1>
            <div className="degree-card">
                <div className="degreeImage centered">
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className="degreeWrapper">
                    <div className="degreeInfo" style={{color:"purple"}}>
                        <div id="course-duration" style={{color:nonThemeColor}}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</div>
                        <div id="college-name">{EducationData.collegeName}</div>
                        <div id="course" style={{color:nonThemeColor}}>{EducationData.courseName}</div>
                    </div>
                    <div className="details">
                        <ul>
                            {EducationData.details.map((item,index)=>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Degree;