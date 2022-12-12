import Camera from "../../assets/icons/camera-solid.svg";
import Headset from "../../assets/icons/headset-solid.svg";
import Search from "../../assets/icons/search-solid.svg";
import Home from "../../assets/icons/home-solid.svg";
import Settings from "../../assets/icons/settings-solid.svg";

import "./footer.css";

const Footer = () => {
    console.log();

    return (
        <div className="footer-container">
            <div className="footer-icons">
                <div className="footer-icons-submenu">
                    <img className="footer-icon" src={Home} alt="" />
                    <img className="footer-icon left" src={Search} alt="" />
                </div>

                <div className="footer-main-icon">
                    <img className="footer-icon" src={Camera} alt="" />
                </div>
                
                <div className="footer-icons-submenu">
                    <img className="footer-icon right" src={Headset} alt="" />
                    <img className="footer-icon" src={Settings} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;