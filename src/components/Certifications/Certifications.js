import React from "react";

import "./certifications.css";
import CreateCertificate from "./CreateCertificate";
import CertificatesData from "../../Data/CertificatesData"
import { useSelector } from "react-redux";
const Certifications = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    let certificationsList = CertificatesData.certificationsList;

    return (
        <div className="certifications">
            <div id="certification-title" style={{color:nonThemeColor}}>Certifications</div>
            <div className="certificate-card">
                {certificationsList.map((item, id) => {
                    return (
                        <CreateCertificate key={id} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Certifications;