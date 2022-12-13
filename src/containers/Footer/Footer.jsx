import Camera from "../../assets/icons/camera-solid.svg";
import Search from "../../assets/icons/search-solid.svg";
import Home from "../../assets/icons/home-solid.svg";

import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-icons">
                <img className="footer-icon" src={Home} alt="" />
                <img className="footer-icon" src={Home} alt="" />
                
                <div className="footer-main-icon">
                    <img className="footer-icon" src={Camera} alt="" />
                    <span className="footer-circle"></span>
                    <span className="footer-dot"></span>
                </div>

                <img className="footer-icon" src={Search} alt="" />
                <img className="footer-icon" src={Search} alt="" />
            </div>
        </div>
    );
};

export default Footer;