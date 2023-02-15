import React from "react";
import "./techstack.css";
import { bootstrap, css, docker, github, html, java, javascript, jest, kubernetes, mysql,
        nodejs, python, react, redux, restapi, sass, typescript } from "./imports";

const Techstack = () => {
    return (
        <div className="techstack" id="techstack">
            <div className="techstack__heading gradient__text">
                <h1>
                    Tech-Stack
                </h1>
            </div>
            <div className="techstack__section">
                <div className="techstack__section--firstrow logo__spacing">
                    <div>
                        <img src={html} alt="HTML" title="HTML"/>
                    </div>
                    <div>
                        <img src={css} alt="CSS" title="CSS"/>
                    </div>
                    <div>
                        <img src={javascript} alt="JavaScript" title="JavaScript"/>
                    </div>
                    <div>
                        <img src={nodejs} alt="Node.js" title="Node.js"/>
                    </div>
                    <div>
                        <img src={java} alt="Java" title="Java"/>
                    </div>
                    <div>
                        <img src={python} alt="Python" title="Python"/>
                    </div>
                </div>
                <div className="techstack__section--secondrow logo__spacing">
                    <div>
                        <img src={react} alt="React" title="React"/>
                    </div>
                    <div>
                        <img src={redux} alt="Redux" title="Redux"/>
                    </div>
                    <div>
                        <img src={typescript} alt="TypeScript" title="TypeScript"/>
                    </div>
                    <div>
                        <img src={sass} alt="Sass" title="Sass"/>
                    </div>
                    <div>
                        <img src={bootstrap} alt="Bootstrap" title="Bootstrap"/>
                    </div>
                    <div>
                        <img src={jest} alt="Jest" title="Jest"/>
                    </div>
                </div>
                <div className="techstack__section--thirdrow logo__spacing">
                    <div>
                        <img src={mysql} alt="MySQL" title="MySQL"/>
                    </div>
                    <div>
                        <img src={docker} alt="Docker" title="Docker"/>
                    </div>
                    <div>
                        <img src={kubernetes} alt="Kubernetes" title="Kubernetes"/>
                    </div>
                    <div>
                        <img src={github} alt="GitHub" title="GitHub"/>
                    </div>
                    <div>
                        <img src={restapi} alt="REST-API" title="REST-API"/>
                    </div>
                    <div>
                        <img src={css} alt="Jest" title="Jest"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack