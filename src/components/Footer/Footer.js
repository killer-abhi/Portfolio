import React from "react";

import Data from "../Data";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";

function Footer(props){
    let currentYear=new Date().getFullYear();
    console.log(currentYear);
    return(
        <footer className="centered">
            <CopyrightIcon/>
            &nbsp;{currentYear}
            &nbsp;Coded By&nbsp; {Data.personalData.firstName}&nbsp;{Data.personalData.lastName}
        </footer>
    )
}
export default Footer;