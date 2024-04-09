import "./mode.css";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { themeActions } from "../store/theme";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DoneIcon from '@mui/icons-material/Done';

import ContrastIcon from '@mui/icons-material/Contrast';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const icons=[
    <LightModeIcon />,
    <DarkModeIcon />,
    <ContrastIcon />
];

const Mode=()=>{

    const dispatch=useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [iconIndex,setIcon]=useState(0);

    let mode='light';
    function fetchSystemMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            mode='dark';
        }else{
            mode='light';
        }
    }

    useEffect(() => {
        fetchSystemMode();
        if (mode==='dark') {
            handleModeChange(1);
        }
    }, [mode]);

    function handleModeChange(index) {
        if(index===0){
            mode="light";
        }else if(index===1){
            mode="dark";
        }else{
            fetchSystemMode();
        }
        setIcon(index);
        const listItems=document.getElementsByClassName("modeItem");
        for(let i=0;i<3;i++){
            listItems[i].classList.remove("activeMode");
        }
        listItems[index].classList.add("activeMode");

        dispatch(themeActions.setMode(mode));
        setIsVisible(false);
    }
    function handleDropdown() {
        setIsVisible(!isVisible);
    }
    return(
        <div className="theme">
                <ul className="dropdown" style={{display:isVisible?"block":"none"}}>
                    <li className="modeItem" onClick={(e)=>handleModeChange(0)}>
                        <LightModeIcon />
                        Light
                        <DoneIcon style={{color:iconIndex===0?"inherit":"transparent"}}/>
                    </li>
                    <li className="modeItem" onClick={(e)=>handleModeChange(1)}>
                        <DarkModeIcon />
                        Dark
                        <DoneIcon style={{color:iconIndex===1?"inherit":"transparent"}}/>
                    </li>
                    <li className="modeItem" onClick={(e)=>handleModeChange(2)}>
                        <ContrastIcon />
                        Auto
                        <DoneIcon style={{color:iconIndex===2?"inherit":"transparent"}}/>
                    </li>
                </ul>
                <div className="modeBtn">
                <button onClick={handleDropdown}>
                    {icons[iconIndex]}
                    <ArrowDropUpIcon/>
                </button>
                </div>
            </div>
    );
};
export default Mode;