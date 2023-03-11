import React from "react";
import "./project.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { previousImage, nextImage, selectProjectinfo, jumpToImage } from "../../redux/projectinfoSlice";


const Project = (props) => {
    const {projectArray} = useSelector(selectProjectinfo);
    const dispatch = useDispatch();
    const allProjects = projectArray;
    const currentProject = allProjects[props.projectId];
    let currentImage = 0;
    const handleLeftClick = () => {
        console.log("left");
        dispatch(previousImage(props.projectId));
    };
    const handleRightClick = () => {
        console.log("right");
        dispatch(nextImage(props.projectId));
    };
    const updateCurrentImage = (newImage) => {
        currentImage = newImage;
    }
    const handleImageTrackerClick = () => {
        dispatch(jumpToImage([props.projectId, currentImage]));
    }
    return (
        <div className="project">
            <div className="project__container">
                <div className="project__container__image-container">
                    <div className="project__image-container__img-slider--left" onClick={handleLeftClick}>
                        <FaChevronLeft />
                    </div>
                    <div className="project__container__image-container__img-container">
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
                    <div className="project__image-container__img-slider--right" onClick={handleRightClick}>
                        <FaChevronRight />
                    </div>
                </div>
                <div className="project__container__image-counter">
                    {
                        currentProject.imgArray.map((image, index) => (
                            <div 
                                className={currentProject.currentImage === index && "image--active" } 
                                key={"image-counter" + index}
                                onClick={() => {
                                    updateCurrentImage(index);
                                    handleImageTrackerClick();
                                }}
                            >
                                <p>
                                    {"⬤"}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="project__container__info-container">
                    <div className="project__container__info-container--status">
                        {
                            currentProject.status === "finished" ? <p>Finished</p> : <p>Ongoing</p>
                        }
                    </div>
                    <div className="project__container__info-container--info">
                        <h2>
                            {currentProject.projectName}
                        </h2>
                        <p>
                            {currentProject.projectDescription}
                        </p>
                        <div className="project__container__info-container--tech">
                            {currentProject.techStack.map(
                                (element) => (
                                    <h3>{element}</h3>
                                )
                            )}
                        </div>
                    </div>
                    <div className="project__container__info-container--links">
                        {
                            currentProject.liveDemo !== "" && <a href={currentProject.liveDemo} target="_blank"><button>Live Demo</button></a>
                        }
                        {
                            currentProject.gitHub !== "" && <a href={currentProject.gitHub} target="_blank"><button>GitHub</button></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project