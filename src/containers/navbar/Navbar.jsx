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
                    <FiMenu size={90} style={{color: "white", padding: "10px"}} onClick={() => dispatch(switchScreenversion())}/>
                </div>
                <div className={mobile === true ? "navbar__links-hamburgermenu--open" : "navbar__links-hamburgermenu--closed"}>
                    <p><a href="#aboutme" onClick={() => dispatch(switchScreenversion())}>Über mich</a></p>
                    <p><a href="#techstack" onClick={() => dispatch(switchScreenversion())}>Tech Stack</a></p>
                    <p><a href="#projects" onClick={() => dispatch(switchScreenversion())}>Projekte</a></p>
                    <p><a href="#contact" onClick={() => dispatch(switchScreenversion())}>Kontakt</a></p>
                    <p><a href={lebenslauf} target="_blank" rel="noreferrer" onClick={() => dispatch(switchScreenversion())}>Lebenslauf</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar