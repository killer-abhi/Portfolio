import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector } from "react-redux";

const ProjectItem = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);

    return (
        <Card className={classes.projectItem} borderColor='purple'>
            <h2 style={{color:nonThemeColor}}>Project Title</h2>
            <p className={classes.description}>Project Description</p>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    <a href="#" style={{color:'orange'}}><StarIcon fontSize="large" /></a>
                    <a href="#" style={{color:nonThemeColor}}><GitHubIcon fontSize="large" /></a>
                </div>
                <p className={classes.dateUpdated} style={{color:nonThemeColor}}>Last Updated On 12 3 3839</p>
            </div>
        </Card>
    )
};
export default ProjectItem;