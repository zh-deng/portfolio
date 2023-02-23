import React from "react";
import "./header.css";

import { BsLinkedin, BsGithub, BsFillArrowUpCircleFill } from "react-icons/bs";
import { FloatButton } from "antd";

const Header = () => {
    return (
        <div className="header" id="aboutme">
            <div className="header__floatbutton">
                <FloatButton.Group >
                    <FloatButton
                        icon={<BsFillArrowUpCircleFill />}
                        tooltip="Go to top"
                        href="#home"
                    />
                    <FloatButton
                        icon={<BsLinkedin />}
                        tooltip="Visit LinkedIn profile"
                        href="https://www.linkedin.com/in/zhihao-deng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <FloatButton
                        icon={<BsGithub/>}
                        tooltip="Visit GitHub Repositories"
                        href="https://github.com/zh-deng"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </FloatButton.Group>
            </div>
            <div className="header__heading">
                <h1>Über mich</h1>
            </div>
            <div className="header__aboutme">
                <p>
                    Moin, ich bin ein Softwareentwickler aus Unterhaching bei <span className="bold">München</span>. 
                    Ich habe meinen Bachelor in Informatik an der <span className="bold">Ludwig-Maximilians-Universität München</span> abgeschlossen. 
                    Ich bin sehr <span className="bold">wissbegierig</span> und scheue mich nicht vor <span className="bold">neuen Technologien</span>.
                    Das Lösen von Problemen und <span className="bold">strategisches Denken</span> sind meine Leidenschaft.
                    Ich interagiere gerne mit Menschen und würde mich als <span className="bold">Teamplayer</span> bezeichnen.
                </p>
            </div>
        </div>
    )
}

export default Header