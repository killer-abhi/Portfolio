import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './navbar.css';

import { themeActions } from "../../store/theme";

import ColorModal from "./ColorModal";
import Routes from "./Routes";

import PersonalData from "../../Data/PersonalData";

const Navbar = () => {

    const menuRef = useRef();
    const dispatch = useDispatch();
    const activeNavRoute = useLocation();
    
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const changeColor = (newColor) => {
        dispatch(themeActions.changeThemeColor(newColor));
    }

    const mode = useSelector(state => state.mode);
    const bgColor = useSelector(state => state.theme.backgroundColor);
    const activeColor = useSelector(state => state.theme.color);

    // const [mode, setMode] = useState("light");
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [isColorModalShown, setColorModalShown] = useState(false);


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
        setColorModalShown(prev => !prev);
    }
    function handleDropDown() {
        setIsDropDownVisible((prevValue)=>{
            return !prevValue;
        });
    }
    function handleNavigate(){
        handleDropDown();
            menuRef.current.checked = false;
    }
    
    let systemTheme='light';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        systemTheme='dark';
    }

    useEffect(() => {
        if (systemTheme==='dark') {
            handleModeChange();
        }
    }, [systemTheme]);

    // useEffect(() => {
    //     handleDropDown();
    //     menuRef.current.checked = false;
    // }, [activeNavRoute])

    return (
        <div className="main">
            <div className="navbar" style={{ backgroundColor: bgColor }}>
                <div className="logoContainer">
                    <div id="logo">
                        {PersonalData.firstName}&nbsp;&nbsp;{PersonalData.lastName}
                    </div>
                </div>
                <div className="navsContainer" style={{ color: nonThemeColor }}>
                    <Routes />
                </div>
                <div className="selectTheme">
                    <div className="selectMode" onClick={handleModeChange}>
                        <div id="lightModeBtn" style={{ color: "white" }}><LightModeIcon /></div>
                        <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                    </div>

                    <div className="colorSelector" onClick={handleColorSelector} style={{ backgroundColor: activeColor }}>
                        {
                            isColorModalShown && <ColorModal selectColor={changeColor} onConfirm={handleColorSelector} />
                        }
                    </div>

                    <input type="checkbox" onClick={()=>handleDropDown()} ref={menuRef} id="burger-toggle" />
                    <label htmlFor="burger-toggle" className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </div>
            </div>
            {isDropDownVisible && <div className="mob-nav" style={{ color: 'white' }}>
                <Routes onClick={handleNavigate} />
            </div>}
        </div>
    )
}

export default Navbar;