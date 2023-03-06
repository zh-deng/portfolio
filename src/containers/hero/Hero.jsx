import React from "react";
import "./hero.css";
import portrait from "../../assets/portrait/portrait.png";

import { BsLinkedin, BsGithub, BsFillArrowUpCircleFill } from "react-icons/bs";
import { FloatButton } from "antd";

const Hero = () => {
    return (
        <div className="hero" id="aboutme">
            <div className="hero__floatbutton">
                <FloatButton.Group >
                    <FloatButton
                        icon={<BsFillArrowUpCircleFill />}
                        tooltip="Go to top"
                        href="#home"
                        className="hero__floatbutton--goToTop"
                    />
                    <FloatButton
                        icon={<BsLinkedin />}
                        tooltip="Visit LinkedIn profile"
                        href="https://www.linkedin.com/in/zhihao-deng/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__floatbutton--linkedin"
                    />
                    <FloatButton
                        icon={<BsGithub/>}
                        tooltip="Visit GitHub Repositories"
                        href="https://github.com/zh-deng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__floatbutton--github"
                    />
                </FloatButton.Group>
            </div>
            <div className="hero__aboutme">
                <div className="hero__aboutme--text">
                    <h1>Über mich</h1>
                    <p>
                        Moin, ich bin ein Softwareentwickler aus Unterhaching bei <span className="bold">München</span>.
                        Ich habe meinen Bachelor in Informatik an der <span className="bold">Ludwig-Maximilians-Universität München</span> abgeschlossen.
                        Ich lerne sehr schnell und bin immer <span className="bold">offen für neue Technologien</span>.
                        Das Lösen von Problemen und <span className="bold">strategisches Denken</span> sind meine Leidenschaft.
                        Ich interagiere gerne mit Menschen und würde mich als <span className="bold">Teamplayer</span> bezeichnen.
                    </p>
                </div>
                <img src={portrait} title="Portrait" alt="Portrait" id="portrait--web" />
            </div>
        </div>
    )
}

export default Hero