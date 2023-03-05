import React from "react";
import "./darkmodeswitch.css";


const Darkmodeswitch = () => {
    return (
        <div class ="darkmodeswitch">
            <label>
                <input type ="checkbox"/>
                <span class ="darkmodeswitch__slider"></span>
            </label>
        </div>
    )
}

export default Darkmodeswitch