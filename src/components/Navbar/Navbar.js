import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './navbar.css';

import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme";

import ColorModal from "./ColorModal";
import Dropdown from "./Dropdown";

import PersonalData from "../Data/PersonalData";
function Navbar(props) {

    const dispatch=useDispatch();
    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    const changeColor=(newColor)=> {
        console.log(newColor);
        dispatch(themeActions.changeThemeColor(newColor));
    }

    const mode=useSelector(state=>state.mode);
    const bgColor=useSelector(state=>state.theme.backgroundColor);
    const activeColor=useSelector(state=>state.theme.color);

    // const [mode, setMode] = useState("light");
    const [isColorModalShown,setColorModalShown]=useState(false);
    const [navActive, setNavActive] = useState(1);

    function handleNavActive(index) {
        // console.log(index);
        setNavActive(prevActive => {
            let prevNav = document.getElementById("navElement" + prevActive);
            prevNav.classList.toggle('active');
            // console.log(prevActive);
            return (index);
        })
        let currentNav = document.getElementById("navElement" + index);
        currentNav.classList.toggle('active');
    }
    
    function handleModeChange() {

        const lightModeBtn = document.getElementById("lightModeBtn")
        const darkModeBtn = document.getElementById("darkModeBtn")
        if (mode === 'light') {
            lightModeBtn.style.display = "none";
            darkModeBtn.style.display = "block";
            darkModeBtn.style.color = "black";
        }
        else {
            lightModeBtn.style.display = "block";
            darkModeBtn.style.display = "none";
            lightModeBtn.style.color = "white";
        }
        dispatch(themeActions.toggleMode());
    }

    function handleColorSelector() {
        setColorModalShown(prev=>!prev);
    }

    const [isVisible, setIsVisible] = useState(false);

    function handleMenu() {
        setIsVisible(!isVisible);
        console.log(isVisible);
    }
    console.log(bgColor);
    return (
        <div className="main">
            <div className="navbar" style={{backgroundColor:bgColor}}>
                <Zoom in={true}>
                    <div className="logoContainer">
                        <div id="logo">
                            {PersonalData.firstName}&nbsp;&nbsp;{PersonalData.lastName}
                        </div>
                    </div>
                </Zoom>
                <Zoom in={true}>
                    <div className="navsContainer" style={{color:nonThemeColor}}>
                        <div className="navs centered active" id="navElement1" onClick={() => handleNavActive(1)}>Home</div>
                        <div className="navs centered" id="navElement2" onClick={() => handleNavActive(2)}>Education</div>
                        <div className="navs centered" id="navElement3" onClick={() => handleNavActive(3)}>Certifications</div>
                        <div className="navs centered" id="navElement4" onClick={() => handleNavActive(4)}>Projects</div>
                        <div className="navs centered" id="navElement5" onClick={() => handleNavActive(5)}>Resume</div>
                    </div>
                </Zoom>
                <div className="selectTheme">
                    <div className="selectMode" onClick={handleModeChange}>
                        <div id="lightModeBtn" style={{ color: "white" }}><LightModeIcon /></div>
                        <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                    </div>
                    <div className="colorSelector" onClick={handleColorSelector} style={{backgroundColor:activeColor}}>
                        {
                            isColorModalShown&&<ColorModal selectColor={changeColor} onConfirm={handleColorSelector} />
                        }
                    </div>
                    <input type="checkbox" id="burger-toggle" onClick={handleMenu} />
                    <label htmlFor="burger-toggle" className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </div>
            </div>
            <Dropdown handleNav={handleNavActive} display={isVisible?"flex":"none"} />
        </div>
    )
}

export default Navbar;