import i18next from "i18next";
import { useState } from "react";

import OutsideClick from "../../hooks/OutsideClick";

import FRLanguage from "../../assets/icons/fr.png";
import ENLanguage from "../../assets/icons/en.png";
import ChevronDown from "../../assets/icons/chevron-down-solid.svg";
import ChevronDownGreen from "../../assets/icons/chevron-down-solid-active.svg";

import "./header.css";

const Header = () => {
    const [ languageMenuOpen, setLanguageMenuOpen ] = useState(false);
    const changeLanguage = (value) => i18next.changeLanguage(value);

    return (
        <div className="header-container">
            <div className="language-choice">
                <img src={i18next && i18next.language === "en" ? ENLanguage : FRLanguage} alt="" className="lang" />
                
                {
                    languageMenuOpen
                        ? <img
                            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                            src={ChevronDownGreen} 
                            alt=""
                            className="chevron"
                        />
                        : <img 
                            src={ChevronDown}
                            alt=""
                            className="chevron"
                            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                        />
                }

                {
                    languageMenuOpen
                        ? <OutsideClick action={() => setLanguageMenuOpen(!languageMenuOpen)}>
                            <div className="dropdown-open">
                                <span 
                                    onClick={() => {
                                        changeLanguage("fr");
                                        setLanguageMenuOpen(!languageMenuOpen);
                                    }}
                                >FR</span>
                                <span 
                                    onClick={() => {
                                        changeLanguage("en");
                                        setLanguageMenuOpen(!languageMenuOpen);
                                    }}
                                >EN</span>
                            </div>
                        </OutsideClick>
                        : null
                }
                <div className="language-dropdown">

                </div>
            </div>
        </div>
    )
};

export default Header;