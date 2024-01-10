import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector } from "react-redux";

const ProjectItem = (props) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    let description = props.project.description;
    if (description === '') {
        description = " project description";
    }
    if (description.length > 120) {
        description = description.substr(0, 120);
        description = description + " ... ";
    }

    return (
        <Card className={classes.projectItem}>
            <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
            <p className={classes.description}>{description}</p>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    <a target="_blank" rel="noreferrer" href={props.project.sourceLink} style={{ color: nonThemeColor }}><GitHubIcon fontSize="large" /></a>
                </div>
                <p className={classes.dateUpdated} style={{ color: nonThemeColor }}>Last Updated On : {props.project.lastUpdated}</p>
            </div>
        </Card >
    )
};
export default ProjectItem;