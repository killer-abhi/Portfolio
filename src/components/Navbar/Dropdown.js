import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./dropdown.css"
import { Zoom } from "@mui/material";
function Dropdown(props) {

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    return (
        <Zoom in={true}>
            <div className="mob-nav" style={{ color: nonThemeColor }}>
                <NavLink activeClassName="active" to="/home">
                    <div className="navs">Home</div>
                </NavLink>

                <NavLink to="/education" activeClassName="active">
                    <div className="navs">Education</div>
                </NavLink>
                <NavLink to="/certifications" activeClassName="active">
                    <div className="navs">Certifications</div>
                </NavLink>
                <NavLink to="/projects" activeClassName="active">
                    <div className="navs">Projects</div>
                </NavLink>
                <NavLink to="/about-me" activeClassName="active">
                    <div className="navs">About Me</div>
                </NavLink>
            </div>
        </Zoom>
    )
}
export default Dropdown;