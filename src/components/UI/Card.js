import React from "react";
import { useSelector } from "react-redux";

import styles from './card.module.css';

const Card=(props)=>{
    // let borderColor=useSelector(state=>state.nonThemeColor);
    return(
        <div className={`${styles.Card} ${props.className}`} style={{borderColor:'purple'}}>
            {props.children}
        </div>
    )
}
export default Card;