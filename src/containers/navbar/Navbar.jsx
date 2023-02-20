import React from "react";
import "./navbar.css";
import lebenslauf from "../../assets/lebenslauf/one.pdf";

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
    return (
        <div className="navbar" id="home">
            <div className="navbar__links">
                <div className="navbar__links-logo">
                    <p>Zhihao Deng</p>
                </div>
                <div className="navbar__links-container">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Navbar