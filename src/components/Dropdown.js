import React from "react";

import "../css/dropdown.css"
function Dropdown(props) {

    function handleClick(index){
        console.log(index);
        props.handleNav(index);
    }
    
    return (
        <div className="mob-nav" style={{display:props.display}}>
            <div className="navs" id="navElement1" onClick={() => handleClick(1)}>Home</div>
            <div className="navs" id="navElement2" onClick={() => handleClick(2)}>Education</div>
            <div className="navs" id="navElement3" onClick={() => handleClick(3)}>Element 3</div>
            <div className="navs" id="navElement4" onClick={() => handleClick(4)}>Element 4</div>
            <div className="navs" id="navElement5" onClick={() => handleClick(5)}>Element 5</div>
        </div>
    )
}
export default Dropdown;