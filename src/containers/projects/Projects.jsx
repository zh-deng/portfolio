import React from "react";
import "./projects.css";
import Project from "../../components/project/Project";
import { useSelector } from "react-redux";


const Projects = () => {
    const {projectCount} = useSelector((state) => state.projectinfo);
    console.log(projectCount);
    const projectsData = []
    let projects = [];
    for(let i = 0; i < projectCount; i++) {
        projects.push(i);
    }
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