import React, { useState } from "react";
import './app.css';
//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Project";

function App(){

    const [theme,setTheme]=useState({
        backgroundColor:"rgb(237, 249, 254)",
        color:"black"
    })

    function changeTheme(newTheme){
        setTheme(prevTheme=>{
            return newTheme;
        });
    }

    return(
        <div className="App" style={theme}>
            <Navbar theme={theme} changeColor={changeTheme} />
            {/* <Home/> */}
            {/* <Education theme={theme}/> */}
            {/* <Certifications/> */}
            <Projects/>
            <Footer/>
        </div>
    )
}

export default App;