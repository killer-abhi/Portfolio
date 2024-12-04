import React from 'react';
import './app.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Projects from './components/Projects/Project';
import AboutMe from './components/About Me/AboutMe';
import Mode from './theme/mode';
import { useSelector } from 'react-redux';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Route, Switch, Redirect, useLocation } from "react-router-dom";

const App = () => {
    // Accessing the theme from the Redux store
    const theme = useSelector((state) => state.theme);

    return (
        <div className="App" style={theme}>
            <Navbar />
            <Home />
            <Education />
            <Projects />
            <AboutMe />
            <Footer />
            <Mode />
        </div>
    );

    /* Uncomment the following code block to enable routing with React Router */
    /*
    const location = useLocation();
    return (
        <div className="app-content">
            <TransitionGroup>
                <CSSTransition timeout={300} classNames="fade" key={location.key}>
                    <Switch location={location}>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={Home} />
                        <Route path="/about-me" component={AboutMe} />
                        <Route path="/education" component={Education} />
                        <Route path="/projects" component={Projects} />
                        <Route path="*">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
    */
};

export default App;
