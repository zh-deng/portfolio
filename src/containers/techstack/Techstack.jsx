import React from "react";
import "./techstack.css";
import { bootstrap, css, docker, figma, git, html, java, javascript, jest, kubernetes, mysql,
        nodejs, python, react, redux, restapi, sass, typescript } from "./imports";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../../redux/tabtrackerSlice";

const Techstack = () => {
    const { tabIndex } = useSelector((state) => state.tabtracker);
    const dispatch = useDispatch();

    const firstTabId = 1;
    const secondTabId = 2;
    const thirdTabId = 3;

    return (
        <div className="techstack" id="techstack">
            <div className="techstack__heading gradient__text">
                <h1>
                    Tech-Stack
                </h1>
            </div>
            <div className="techstack__tab-container">
                <div className="techstack__tab-container__navbar">
                    <div className={tabIndex === firstTabId ? "tabs active-tab" : "tab unactive-tab"} onClick={() => dispatch(changeIndex(firstTabId))}>
                        <h1>Fokus</h1>
                    </div>
                    <div className={tabIndex === secondTabId ? "tabs active-tab" : "tab unactive-tab"} onClick={() => dispatch(changeIndex(secondTabId))}>
                        <h1>Basic-Wissen</h1>
                    </div>
                    <div className={tabIndex === thirdTabId ? "tabs active-tab" : "tab unactive-tab"} onClick={() => dispatch(changeIndex(thirdTabId))}>
                        <h1>Allgemein</h1>
                    </div>
                </div>
                <div className="techstack__tab-container__section">
                    <div className={tabIndex !== firstTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={html} alt="HTML" title="HTML"/>
                            </div>
                            <div>
                                <img src={css} alt="CSS" title="CSS"/>
                            </div>
                            <div>
                                <img src={javascript} alt="JavaScript" title="JavaScript"/>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--secondrow logo__spacing">
                            <div>
                                <img src={nodejs} alt="Node.js" title="Node.js"/>
                            </div>
                            <div>
                                <img src={react} alt="React" title="React"/>
                            </div>
                            <div>
                                <img src={redux} alt="Redux" title="Redux"/>
                            </div>
                        </div>
                    </div>
                    <div className={tabIndex !== secondTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={java} alt="Java" title="Java"/>
                            </div>
                            <div>
                                <img src={python} alt="python" title="python"/>
                            </div>
                            <div>
                                <img src={mysql} alt="MySQL" title="MySQL"/>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--secondrow logo__spacing">
                            <div>
                                <img src={typescript} alt="TypeScript" title="TypeScript"/>
                            </div>
                            <div>
                                <img src={sass} alt="Sass" title="Sass"/>
                            </div>
                            <div>
                                <img src={bootstrap} alt="Bootstrap" title="Bootstrap"/>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--thirdrow logo__spacing">
                            <div>
                                <img src={jest} alt="Jest" title="Jest"/>
                            </div>
                            <div>
                                <img src={css} alt="css" title="css"/>
                            </div>
                            <div>
                                <img src={css} alt="css" title="css"/>
                            </div>
                        </div>
                    </div>
                    <div className={tabIndex !== thirdTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={git} alt="Git" title="Git"/>
                            </div>
                            <div>
                                <img src={docker} alt="Docker" title="Docker"/>
                            </div>
                            <div>
                                <img src={kubernetes} alt="Kubernetes" title="Kubernetes"/>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--secondrow logo__spacing">
                            <div>
                                <img src={restapi} alt="RestAPI" title="RestAPI"/>
                            </div>
                            <div>
                                <img src={figma} alt="Figma" title="Figma"/>
                            </div>
                            <div>
                                <img src={css} alt="css" title="css"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack