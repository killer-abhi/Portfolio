import React from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import "./createCertificate.css"
import { Udemy } from "../asset/svg/svg";
import ThemeData from "../../Data/ThemeData";

const CreateCertificate = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    
    const activeMode=useSelector(state=>state.mode);
    let certBgColor;
    if(activeMode==='light'){
        certBgColor=ThemeData.certBgLight;
    }
    else{
        certBgColor=ThemeData.certBgDark;
    }
    let certImage;
    if (props.item.platform === 'udemy') {
        certImage = <Udemy />;
    }
    return (
        <div className="certificate">
            <div className="cert-overlay">
                <div className="overlay-link">
                    <a href={props.item.link} id='overlay-text'>
                        <Button> View Certificate</Button>
                    </a>
                </div>
            </div>
            <div className="cert-body">
                <div className="cert-image" style={{ color: nonThemeColor,backgroundColor:certBgColor}}>
                    {certImage}
                </div>
                <div className="cert-info">
                    <h1 style={{color:"purple"}}>{props.item.title}</h1>
                    <h2>{props.item.instructor}</h2>
                </div>
            </div>
        </div>
    )
}
export default CreateCertificate;
