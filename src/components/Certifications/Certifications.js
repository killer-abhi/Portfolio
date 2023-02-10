import React from "react";

import classes from "./certifications.module.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData"
import { useSelector } from "react-redux";
const Certifications = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    let certificationsList = CertificatesData.certificationsList;

    return (
        <React.Fragment>
            <h1 style={{color:nonThemeColor}}>Certifications</h1>
            <div className={classes.certificateCard}>
                {certificationsList.map((item, index) => {
                    return (
                        <CreateCertificate key={index} item={item}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
export default Certifications;