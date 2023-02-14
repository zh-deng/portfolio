import React from "react";
import "./navbar.css";

const Menu = () => (
    <>
    <p><a href="#aboutme">Über mich</a></p>
    <p><a href="#techstack">Tech Stack</a></p>
    <p><a href="#projects">Projekte</a></p>
    <p><a href="#contact">Kontakt</a></p>
    <p><a href="#cv">Lebenslauf</a></p>
    </>
)

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <div className="navbar__links-logo">
                    Zhihao Deng
                </div>
                <div className="navbar__links-container">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Navbar