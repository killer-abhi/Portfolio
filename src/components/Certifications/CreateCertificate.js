import React from "react";
import { useSelector } from "react-redux";

import Button from "../UI/Button";
import "./createCertificate.css"
import { Udemy } from "../asset/svg/svg";

const CreateCertificate = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
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
                <div className="cert-image" style={{ color: nonThemeColor,backgroundColor:'lightblue' }}>
                    {certImage}
                </div>
                <div className="cert-info">
                    <h1 style={{color:nonThemeColor}}>{props.item.title}</h1>
                    <h2>{props.item.instructor}</h2>
                </div>
            </div>
        </div>
    )
}
export default CreateCertificate;
