import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header" id="aboutme">
            <div className="header__heading">
                <h1>Intro</h1>
            </div>
            <div className="header__intro">
                <p>
                    Moin, ich bin ein Softwareentwickler aus Unterhaching bei <span className="bold">München</span>. 
                    Ich habe meinen Bachelor in Informatik an der <span className="bold">Ludwig-Maximilians-Universität München</span> abgeschlossen. 
                    Auf dieser Website werden sowohl meine bisher <span className="bold">verwendeten Technologien</span>, als auch meine vergangenen <span className="bold">Projekte</span> vorgestellt. 
                    Ich bin sehr <span className="bold">wissbegierig</span> und scheue mich nicht vor <span className="bold">neuen Technologien</span>. 
                    Ich interagiere gerne mit Menschen und würde mich als <span className="bold">Teamplayer</span> bezeichnen.
                </p>
            </div>
        </div>
    )
}

export default Header