import React, { useState } from "react";
import './css/app.css';
//components
import Navbar from './components/Navbar';
import ColorCards from './components/ColorCards';

function App(){

    const [theme,setTheme]=useState({
        backgroundColor:"gray",
        color:"white"
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
            <h1>Killer Abhi</h1>
        </div>
    )
}

export default App;