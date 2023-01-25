import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

const ProjectItem = (props) => {
    return (
        <Card className={classes.projectItem}>
            <h2>Project Title</h2>
            <p className={classes.description}>Project Description</p>
            <div className={classes.controls}>Project Controls</div>
        </Card>
    )
};
export default ProjectItem;