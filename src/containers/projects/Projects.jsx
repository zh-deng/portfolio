import React from "react";
import "./projects.css";
import Project from "../../components/project/Project";
import { useSelector } from "react-redux";


const Projects = () => {
    const {projectArray} = useSelector((state) => state.projectinfo);
    let projects = [];
    projectArray.map((project, index) => {
        projects.push(index);
    });
    return (
        <div className="projects" id="projects">
            <div className="projects__heading">
                <h1>Projekte</h1>
            </div>
            <div className="projects__container">
                {
                    projects.map((item, index) => (
                        <Project projectId={index}/> 
                    ))
                }
            </div>
        </div>
    )
}

export default Projects