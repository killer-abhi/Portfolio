import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './app.css';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
// import GetInTouch from "./components/Get In Touch/GetInTouch";
// import ProgrammingSkills from "./components/Professional Skillset/ProgrammingSkills";

import { useSelector } from "react-redux";
// import { themeActions } from "./store/theme";

function App() {
    const theme = useSelector(state => state.theme);
    return (
        <div className="App" style={theme}>
            <Navbar />
            <div className="app-content">
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/about-me">
                        <AboutMe />
                    </Route>

                    <Route path="/education">
                        <Education />
                    </Route>

                    <Route path="/certifications">
                        <Certifications />
                    </Route>

                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="*">
                        <Redirect to="/home" />
                    </Route>
                    {/* <ProgrammingSkills /> */}
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App;