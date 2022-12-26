import React, { useState } from "react";
import './css/app.css';
//components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App(){

    const [theme,setTheme]=useState({
        backgroundColor:"rgb(237, 249, 254)",
        color:"black"
    })

    function changeTheme(newTheme){
        setTheme(prevTheme=>{
            return(
                newTheme
            )
        });
    }

    return(
        <div className="App" style={theme}>
            <Navbar theme={theme} changeColor={changeTheme} />
            <Home/>
            <Footer/>
        </div>
    )
}

export default App;