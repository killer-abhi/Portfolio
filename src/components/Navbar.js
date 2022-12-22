import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
//Navbar CSS
import '../css/navbar.css';

import ColorCards from "./ColorCards";

function Navbar(props) {

    const [mode, setMode] = useState("light");
    const [colorCard,setColorCard]=useState(false);
    const [colorCardDisplay,setColorCardDisplay]=useState("none");

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
            lightModeBtn.style.display = "none";
            darkModeBtn.style.display = "block";
            darkModeBtn.style.color = "black";
        }
        else {
            setMode("light");
            newTheme.backgroundColor = "gray";
            lightModeBtn.style.display = "block";
            darkModeBtn.style.display = "none";
            lightModeBtn.style.color = "white";
        }
        props.changeColor(newTheme);
    }
    
    function handleColorSelector(){
        setColorCard(!colorCard);
        if(colorCard){

            setColorCardDisplay("none");
        }
        else{
            
            setColorCardDisplay("absolute");
        }
    }
    function changeTheme(newColor) {
        console.log(newColor);
        const newTheme = {
            color: newColor,
            backgroundColor: props.theme.backgroundColor
        }
        props.changeColor(newTheme);
    }

    return (
        <div className="navbar" style={props.theme}>
            <Zoom in={true}>
                <div className="logoContainer">
                    <div id="logo">
                        Abhishek Kumar
                    </div>
                </div>
            </Zoom>
            <Zoom in={true}>
                <div className="navsContainer">
                    <div className="navs centered" id="navElement1">Element 1</div>
                    <div className="navs centered" id="navElement2">Element 2</div>
                    <div className="navs centered" id="navElement3">Element 3</div>
                    <div className="navs centered" id="navElement4">Element 4</div>
                    <div className="navs centered" id="navElement5">Element 5</div>
                    <div className="selectTheme">
                        <div className="colorSelector" onClick={handleColorSelector} style={{backgroundColor:props.theme.color}}>
                            {colorCard&&<ColorCards display={colorCardDisplay} selectColor={changeTheme} />}
                        </div>
                        <div className="selectMode" onClick={handleModeChange}>
                            <div id="lightModeBtn"><LightModeIcon /></div>
                            <div id="darkModeBtn" style={{ display: "none" }}><DarkModeIcon /></div>
                        </div>
                        {/* <input type="color"
                            value={props.theme.color}
                            onChange={changeTheme}
                        /> */}
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default Navbar;