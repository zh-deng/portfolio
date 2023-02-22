import React from "react";
import "./navbar.css";
import lebenslauf from "../../assets/lebenslauf/one.pdf";
import { useDispatch, useSelector } from "react-redux";
import { switchScreenversion } from "../../redux/mobileswitchSlice";
import { FiMenu } from "react-icons/fi";

const Menu = () => (
    <>
    <p><a href="#aboutme">Über mich</a></p>
    <p><a href="#techstack">Tech Stack</a></p>
    <p><a href="#projects">Projekte</a></p>
    <p><a href="#contact">Kontakt</a></p>
    <p><a href={lebenslauf} target="_blank" rel="noreferrer">Lebenslauf</a></p>
    </>
)

const Navbar = () => {
    const { mobile } = useSelector((state) => state.mobileswitch);
    const dispatch = useDispatch();

    return (
        <div className="navbar" id="home">
            <div className="navbar__links">
                <div className="navbar__links-logo">
                    <p>Zhihao Deng</p>
                </div>
                <div className={mobile === false ? "navbar__links-container" : "navbar__links-container invisible"}>
                    <Menu />
                </div>
                <div className="navbar__links-hamburgermenu">
                    <FiMenu size={90} style={{color: "white", padding: "10px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar