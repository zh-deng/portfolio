import React from "react";
import "./navbar.css";
import lebenslauf from "../../assets/lebenslauf/one.pdf";
import { useDispatch, useSelector } from "react-redux";
import { selectMobileswitch, switchScreenversion } from "../../redux/mobileswitchSlice";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

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
    const { mobile } = useSelector(selectMobileswitch);
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="navbar__links">
                <div className="navbar__links-logo">
                    <p>Zhihao Deng</p>
                </div>
                <div className={mobile === false ? "navbar__links-container" : "navbar__links-container invisible"}>
                    <Menu />
                </div>
                <div className="navbar__links-hamburgermenu">
                    <FiMenu  onClick={() => dispatch(switchScreenversion())}/>
                </div>
                <div className={mobile === true ? "navbar__links-hamburgermenu--open" : "navbar__links-hamburgermenu--closed"}>
                    <div className="navbar__links-hamburgermenu--exit" onClick={() => dispatch(switchScreenversion())}>
                        <ImCross />
                    </div>
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