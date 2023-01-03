import React from "react";

import "./certifications.css";
import CreateCertificate from "./CreateCertificate";
import Data from "../Data";

const Certifications = (props) => {

    let certificationsList = Data.certificationsList;

    return (
        <div className="certifications">
            <div id="certification-title">Certifications</div>
            <div className="certificate-card">
                {certificationsList.map((item, id) => {
                    return (
                        <CreateCertificate key={id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
export default Certifications;