import React from "react";
import { createPortal } from "react-dom";

// import Zoom from '@mui/material/Zoom';
import Data from "../Data";
// import Card from '../UI/Card';

import "./colorModal.css";

const Backdrop = props => {
    return <div className='backdrop' onClick={props.onConfirm}></div>;
}

function ColorModal(props) {
    let defaultColors;
    if (props.mode === 'light') {
        defaultColors = Data.lightBgThemeColors;
    }
    else {
        defaultColors = Data.darkBgThemeColors;
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
                <div className="colorCard">
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