import React from "react";
import "./footer.css";
import linkedin from "../../assets/stack/linkedin.png";
import github from "../../assets/stack/github.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__contact">
                <a href="https://www.linkedin.com/in/zhihao-deng/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" title="LinkedIn"/></a> 
                <a href="https://github.com/zh-deng" target="_blank" rel="noopener noreferrer" ><img src={github} /></a>
            </div>
            <div className="footer__copyright">
                <p>Design by Zhihao Deng</p>
            </div>
        </div>
    )
}

export default Footer