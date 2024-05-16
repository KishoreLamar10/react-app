import React from "react";
import '../styles/header.css'

function header(){
    return(
        <header className="header">
            <div className="title"> MyResume </div>
            
            <nav-bar class="nav-bar">
                <ul class="nav-bar-list">
                    <li class="nav-bar-items">VALORANT</li>
                    <li class="nav-bar-items">WORK</li>
                    <li class="nav-bar-items">EDUCATION</li>
                </ul>
            </nav-bar>
        </header>
        
    )
}

export default header;