import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//Navbar CSS
import './navbar.css';

import ColorModal from "./ColorModal";
import Dropdown from "./Dropdown";

import Data from "../Data";

function Navbar(props) {

    const [mode, setMode] = useState("light");
    const [isColorModalShown,setColorModalShown]=useState(false);
    const [navActive, setNavActive] = useState(1);

    function handleNavActive(index) {
        // console.log(index);
        setNavActive(prevActive => {
            let prevNav = document.getElementById("navElement" + prevActive);
            prevNav.classList.toggle('active');
            console.log(prevActive);
            return (index);
        })
        let currentNav = document.getElementById("navElement" + index);
        currentNav.classList.toggle('active');
    }

    function handleModeChange() {

        const lightModeBtn = document.getElementById("lightModeBtn")
        const darkModeBtn = document.getElementById("darkModeBtn")
        const newTheme = {
            color: props.theme.color,
            backgroundColor: ""
        }
        console.log(mode);
        if (mode === 'light') {
            setMode("dark");
            newTheme.backgroundColor = "black";
            newTheme.color = "white";
            lightModeBtn.style.display = "none";
            darkModeBtn.style.display = "block";
            darkModeBtn.style.color = "black";
        }
        else {
            setMode("light");
            newTheme.backgroundColor = "rgb(237, 249, 254)";
            newTheme.color = "black";
            lightModeBtn.style.display = "block";
            darkModeBtn.style.display = "none";
            lightModeBtn.style.color = "white";
        }
        props.changeColor(newTheme);
        // handleColorSelector();
    }

    function handleColorSelector() {
        setColorModalShown(prev=>!prev);
    }
    function changeTheme(newColor) {
        console.log(newColor);
        const newTheme = {
            color: newColor,
            backgroundColor: props.theme.backgroundColor
        }
        props.changeColor(newTheme);
    }

    const [isVisible, setIsVisible] = useState(false);

    function handleMenu() {
        setIsVisible(!isVisible);
        console.log(isVisible);
    }
    return (
        <div className="main">
            <div className="navbar" style={props.theme}>
                <Zoom in={true}>
                    <div className="logoContainer">
                        <div id="logo">
                            {Data.personalData.firstName}&nbsp;&nbsp;{Data.personalData.lastName}
                        </div>
                    </div>
                </Zoom>
                <Zoom in={true}>
                    <div className="navsContainer">
                        <div className="navs centered active" id="navElement1" onClick={() => handleNavActive(1)}>Home</div>
                        <div className="navs centered" id="navElement2" onClick={() => handleNavActive(2)}>Education</div>
                        <div className="navs centered" id="navElement3" onClick={() => handleNavActive(3)}>Element 3</div>
                        <div className="navs centered" id="navElement4" onClick={() => handleNavActive(4)}>Element 4</div>
                        <div className="navs centered" id="navElement5" onClick={() => handleNavActive(5)}>Element 5</div>
                    </div>
                </Zoom>
                <div className="selectTheme">
                    <div className="selectMode" onClick={handleModeChange}>
                        <div id="lightModeBtn" style={{ color: "white" }}><LightModeIcon /></div>
                        <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                    </div>
                    <div className="colorSelector" onClick={handleColorSelector} style={{ backgroundColor: props.theme.color }}>
                        {
                            isColorModalShown&&<ColorModal theme={props.theme} selectColor={changeTheme} mode={mode} onConfirm={handleColorSelector} />
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
            {/* <div className="mob-nav" style={{ color: props.theme.color, display: isVisible ?  "flex" :"none" }}>
                <div className="navs" id="navElement1" onClick={() => handleNavActive(1)}>Element 1</div>
                <div className="navs" id="navElement2" onClick={() => handleNavActive(2)}>Education</div>
                <div className="navs" id="navElement3" onClick={() => handleNavActive(3)}>Element 3</div>
                <div className="navs" id="navElement4" onClick={() => handleNavActive(4)}>Element 4</div>
                <div className="navs" id="navElement5" onClick={() => handleNavActive(5)}>Element 5</div>
            </div> */}
            <Dropdown handleNav={handleNavActive} display={isVisible?"flex":"none"} />
        </div>
    )
}

export default Navbar;