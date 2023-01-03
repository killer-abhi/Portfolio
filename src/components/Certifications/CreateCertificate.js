import React from "react";

import "./createCertificate.css"
const CreateCertificate = (props) => {
    return (
        <div className="certificate">
            <div className="cert-overlay">
                <div className="overlay-link">
                    <a href={props.item.link} id='view'>
                        View Certificate
                    </a>
                </div>
            </div>
            <div className="cert-body">
                <div className="cert-image">{props.item.image}</div>
                <div className="cert-info">
                    <div className="cert-title">
                        {props.item.title}
                    </div>
                    <div className="instructor">
                        {props.item.instructor}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateCertificate;
