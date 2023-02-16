import React from "react";
import "./footer.css";
import linkedin from "../../assets/stack/linkedin.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__contact">
                <a href="https://www.linkedin.com/in/zhihao-deng/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" title="LinkedIn"/></a> 
            </div>
            <div className="footer__copyright">
                <p>Copyright by Zhihao Deng</p>
            </div>
        </div>
    )
}

export default Footer