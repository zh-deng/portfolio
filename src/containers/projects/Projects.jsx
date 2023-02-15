import React from "react";
import "./projects.css";
import Project from "../../components/project/Project";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects__heading">
                <h1>Projekte</h1>
            </div>
            <div className="projects__container">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default Projects