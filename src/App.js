import React, { useState } from "react";
import './css/app.css';
//components
import Navbar from './components/Navbar';
import Home from './components/Home';

function App(){

    const [theme,setTheme]=useState({
        backgroundColor:"rgb(237, 249, 254)",
        color:"balck"
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
        </div>
    )
}

export default App;