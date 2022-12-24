import React,{useState} from "react";
import "../css/colorCards.css"
import Zoom from '@mui/material/Zoom';

import Data from "./Data";

function ColorCards(props) {
    let defaultColors;
    if(props.mode==='light'){
        defaultColors=Data.lightBgThemeColors;
    }
    else{
        defaultColors=Data.darkBgThemeColors;
    }

    function handleClick(index){
        props.selectColor(defaultColors[index]);
    }

    return (
        <div className="colorCard" style={{display:props.display,backgroundColor:props.theme.backgroundColor}} >
            <div onClick={()=>handleClick(0)} style={{backgroundColor:defaultColors[0]}}></div>
            <div onClick={()=>handleClick(1)} style={{backgroundColor:defaultColors[1]}}></div>
            <div onClick={()=>handleClick(2)} style={{backgroundColor:defaultColors[2]}}></div>
            <div onClick={()=>handleClick(3)} style={{backgroundColor:defaultColors[3]}}></div>
            <div onClick={()=>handleClick(4)} style={{backgroundColor:defaultColors[4]}}></div>
            <div onClick={()=>handleClick(5)} style={{backgroundColor:defaultColors[5]}}></div>
            <div onClick={()=>handleClick(6)} style={{backgroundColor:defaultColors[6]}}></div>
            <div onClick={()=>handleClick(7)} style={{backgroundColor:defaultColors[7]}}></div>
        </div>
    )
}
export default ColorCards;