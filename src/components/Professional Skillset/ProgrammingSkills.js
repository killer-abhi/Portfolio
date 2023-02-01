
import classes from "./programmingSkills.module.css";
import { CPP, python, mongoDB, fireBase, react, nodeJs, js, redux } from "../asset/svg/svg";
import { useSelector } from "react-redux";
const skills = [CPP, python, fireBase, react, js, nodeJs, mongoDB, redux];
const ProgrammingSkills = (props) => {

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Programming <span style={{ color: 'purple' }}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} key={index}>
                        <div className={classes.name}>React</div>
                        <Item />
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;