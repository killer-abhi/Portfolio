import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

// import Zoom from '@mui/material/Zoom';
import ThemeData from "../../Data/ThemeData"
// import Card from '../UI/Card';

import "./colorModal.css";

const Backdrop = props => {
    return <div className='backdrop' onClick={props.onConfirm}></div>;
}

function ColorModal(props) {

    const mode=useSelector(state=>state.mode);
    let defaultColors;
    let colorCardBgColor;
    if (mode === 'light') {
        defaultColors = ThemeData.lightBgThemeColors;
        colorCardBgColor='white';
    }
    else {
        defaultColors = ThemeData.darkBgThemeColors;
        colorCardBgColor='black';
    }

    function handleClick(index) {
        props.selectColor(defaultColors[index]);
    }

    return (
        <React.Fragment>
            {createPortal(
                <Backdrop onClick={props.onConfirm} />,
                document.getElementById("backdrop")
            )}
            {createPortal(
                <div className="colorCard" style={{backgroundColor:colorCardBgColor}}>
                    {defaultColors.map((color, index) =>
                        <div key={index} onClick={() => handleClick(index)} style={{ backgroundColor: color }}></div>
                    )}
                </div>,
                document.getElementById('overlay')
            )}

        </React.Fragment>
    )
}
export default ColorModal;