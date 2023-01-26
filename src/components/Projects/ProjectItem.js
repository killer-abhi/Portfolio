import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectItem = (props) => {
    return (
        <Card className={classes.projectItem} borderColor='purple'>
            <h2>Project Title</h2>
            <p className={classes.description}>Project Description</p>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    <a href="#"><StarIcon fontSize="large" /></a>
                    <a href="#"><GitHubIcon fontSize="large" /></a>
                </div>
                <p className={classes.dateUpdated}>Last Updated On 12 3 3839</p>
            </div>
        </Card>
    )
};
export default ProjectItem;