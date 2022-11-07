import React from "react";
import { Link } from "react-router-dom";
import './App.css'



function Nav (){
   
        return(
            <header className = "Header">
                <Link to="/projects">Projects List</Link>
                <Link to="/">Home</Link>
               
            </header>
        )
   
}

export default Nav;