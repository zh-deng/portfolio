import React from "react";
import "./techstack.css";
import { bootstrap, css, docker, figma, git, html, java, javascript, jest, kubernetes, mysql,
        nodejs, python, react, redux, restapi, sass, typescript } from "./imports";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex, selectTabtracker } from "../../redux/tabtrackerSlice";

const Techstack = () => {
    const { tabIndex } = useSelector(selectTabtracker);
    const dispatch = useDispatch();

    const firstTabId = 1;
    const secondTabId = 2;
    const thirdTabId = 3;

    return (
        <div className="techstack" id="techstack">
            <div className="techstack__heading">
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
                        <h1>Basics</h1>
                    </div>
                    <div className={tabIndex === thirdTabId ? "tabs active-tab" : "tab unactive-tab"} onClick={() => dispatch(changeIndex(thirdTabId))}>
                        <h1>Allgemein</h1>
                    </div>
                </div>
                <div className="techstack__tab-container__section">
                    <div className={tabIndex !== firstTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={html.logo} alt={html.name} title={html.name}/>
                                <h3>{html.name}</h3>
                            </div>
                            <div>
                                <img src={css.logo} alt={css.name} title={css.name}/>
                                <h3>{css.name}</h3>
                            </div>
                            <div>
                                <img src={javascript.logo} alt={javascript.name} title={javascript.name}/>
                                <h3>{javascript.name}</h3>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--secondrow logo__spacing">
                            <div>
                                <img src={react.logo} alt={react.name} title={react.name}/>
                                <h3>{react.name}</h3>
                            </div>
                            <div>
                                <img src={redux.logo} alt={redux.name} title={redux.name}/>
                                <h3>{redux.name}</h3>
                            </div>
                            <div>
                                <img src={typescript.logo} alt={typescript.name} title={typescript.name}/>
                                <h3>{typescript.name}</h3>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--thirdrow logo__spacing">
                            <div>
                                <img src={sass.logo} alt={sass.name} title={sass.name}/>
                                <h3>{sass.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={tabIndex !== secondTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={java.logo} alt={java.name} title={java.name}/>
                                <h3>{java.name}</h3>
                            </div>
                            <div>
                                <img src={python.logo} alt={python.name} title={python.name}/>
                                <h3>{python.name}</h3>
                            </div>
                            <div>
                                <img src={mysql.logo} alt={mysql.name} title={mysql.name}/>
                                <h3>{mysql.name}</h3>
                            </div>
                        </div>
                        <div className="techstack__tab-container__section--secondrow logo__spacing">
                            <div>
                                <img src={nodejs.logo} alt={nodejs.name} title={nodejs.name}/>
                                <h3>{nodejs.name}</h3>
                            </div>
                            <div>
                                <img src={jest.logo} alt={jest.name} title={jest.name}/>
                                <h3>{jest.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={tabIndex !== thirdTabId && "invisible"}>
                        <div className="techstack__tab-container__section--firstrow logo__spacing">
                            <div>
                                <img src={git.logo} alt={git.name} title={git.name}/>
                                <h3>{git.name}</h3>
                            </div>
                            <div>
                                <img src={restapi.logo} alt={restapi.name} title={restapi.name}/>
                                <h3>{restapi.name}</h3>
                            </div>
                            <div>
                                <img src={figma.logo} alt={figma.name} title={figma.name}/>
                                <h3>{figma.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack