import React from "react";
import "./darkmodeswitch.css";


const Darkmodeswitch = () => {
    const toggleDarkmode = () => {
        document.body.classList.toggle("dark-theme");
    }
    return (
        <div class ="darkmodeswitch" >
            <label>
                <input type ="checkbox" onClick={toggleDarkmode} />
                <span class ="darkmodeswitch__slider"></span>
            </label>
        </div>
    )
}

export default Darkmodeswitch