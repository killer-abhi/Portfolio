import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import Data from "../Data";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";

const Projects = (props) => {
    let projects=Data.DUMMY_PROJECTS;
    return (
        <React.Fragment>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1><span>My Recent </span><span style={{color:'purple'}}>Works</span></h1>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, harum! Et quibusdam, in exercitationem optio enim harum aliquid dolorum. Laudantium.</div>
                </section>
            </div>
            <ProgrammingSkills/>
            <h1 className={styles.projectHeading}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item)=>{
                    return <ProjectItem key={item.id} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <Button className={styles.moreProjectBtn}>More Projects</Button>
            </div>
        </React.Fragment>
    )
};

export default Projects;