import React from "react";
import { useSelector } from "react-redux";

import styles from './card.module.css';

const Card=(props)=>{
    const uiColor=useSelector(state=>state.uiColor);
    return(
        <div className={`${styles.Card} ${props.className}`} style={{borderColor:uiColor}}>
            {props.children}
        </div>
    )
}
export default Card;