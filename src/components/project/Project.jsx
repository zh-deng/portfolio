import React from "react";
import "./project.css";

const Project = () => {
    return (
        <div className="project">
            <div className="project__container">
                <img />
                <h2>
                    Projectname
                </h2>
                <p>
                    Project description
                </p>
                <div className="project__container__button-container">
                    <button>
                        Live Site
                    </button>
                    <button>
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project