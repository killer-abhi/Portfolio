import React,{useState} from "react";
import "../css/colorCards.css"

function ColorCards(props) {

    const defaultColors=["red","green","blue","yellow","gray","pink"];

    function handleClick(index){
        props.selectColor(defaultColors[index]);
    }

    return (
        <div className="swatch" style={{display:props.display}}>
            <div onClick={()=>handleClick(0)} style={{backgroundColor:defaultColors[0]}}></div>
            <div onClick={()=>handleClick(1)} style={{backgroundColor:defaultColors[1]}}></div>
            <div onClick={()=>handleClick(2)} style={{backgroundColor:defaultColors[2]}}></div>
            <div onClick={()=>handleClick(3)} style={{backgroundColor:defaultColors[3]}}></div>
            <div onClick={()=>handleClick(4)} style={{backgroundColor:defaultColors[4]}}></div>
            <div onClick={()=>handleClick(5)} style={{backgroundColor:defaultColors[5]}}></div>
        </div>
    )
}
export default ColorCards;