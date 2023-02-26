import React from "react";
import "./project.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { previousImage, nextImage } from "../../redux/projectinfoSlice";


const Project = (props) => {
    const {projectArray} = useSelector((state) => state.projectinfo);
    const dispatch = useDispatch();
    const allProjects = projectArray;
    const currentProject = allProjects[props.projectId];
    const handleLeftClick = () => {
        console.log("left");
        dispatch(previousImage(props.projectId));
    };
    const handleRightClick = () => {
        console.log("right");
        dispatch(nextImage(props.projectId));
    }
    return (
        <div className="project">
            <div className="project__img-slider--left" onClick={handleLeftClick}>
                <FaChevronLeft />
            </div>
            <div className="project__container">
                <div className="project__container__img-container">
                    {
                        currentProject.imgArray.map((image, index) => (
                            <img 
                                src={image.src} 
                                id={image.title + index}
                                key={image.title + index}
                                title={image.title}
                                alt={image.alt}
                                className={currentProject.currentImage !== index ? "image--off" : "image--on"}
                            />
                        ))
                    }
                </div>
                <div className="project__container__info-container">
                    <h2>
                        Projectname
                    </h2>
                    <p>
                        Project description
                    </p>
                </div>
                <div className="project__container__button-container">
                    <button>
                        Live Site
                    </button>
                    <button>
                        GitHub
                    </button>
                </div>
            </div>
            <div className="project__img-slider--right" onClick={handleRightClick}>
                <FaChevronRight />
            </div>
        </div>
    )
}

export default Project