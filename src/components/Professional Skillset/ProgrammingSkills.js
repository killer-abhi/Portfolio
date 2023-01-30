
import classes from "./programmingSkills.module.css";
import {CPP,python,mongoDB,fireBase,react,nodeJs,js} from "../asset/svg/svg";
const skills = [CPP,python,fireBase,react,js,nodeJs,mongoDB];
const ProgrammingSkills = (props) => {

    return (
        <div className={classes.mainCard}>
            <h1>Programming <span style={{ color: 'purple' }}>SkillSet</span></h1>
            <div className={classes.skillSetCard}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} key={index}>
                        <Item/>
                        {/* <img src={cpp} alt="" /> */}
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;