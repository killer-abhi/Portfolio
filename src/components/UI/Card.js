import React from "react";

import styles from './card.module.css';

const Card=(props)=>{
    let setColor=props.borderColor;
    return(
        <div className={`${styles.Card} ${props.className}`} style={{borderColor:setColor}}>
            {props.children}
        </div>
    )
}
export default Card;