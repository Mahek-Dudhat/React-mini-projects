import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    // const navbar = ["Home", "About", "Services", "Contact"];
    const [showMenu, setShowMenu] = useState(false);
    const [isTrue, setIsTrue] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);

    }

    const handleMenuButton = () => {
        if (isTrue) {
            setIsTrue(false);
        } else {
            setIsTrue(true);
        }
    }

    return (

        <header>
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <h2>MK-HUB</h2>
                    </NavLink>
                </div>

                <nav className={showMenu ? "mobile-menu" : "desktop-menu"}>
                    <ul>
                        <li><NavLink to="/" style={({ isActive }) => {
                            return {
                                color: isActive && "skyblue"
                            }
                        }}>Home</NavLink></li>
                        <li><NavLink to="/about" style={({ isActive }) => {
                            return {
                                color: isActive && "skyblue"
                            }
                        }}>About</NavLink></li>
                        <li><NavLink to="/country" style={({ isActive }) => {
                            return {
                                color: isActive && "skyblue"
                            }
                        }}>Country</NavLink></li>
                        <li><NavLink to="/contact" style={({ isActive }) => {
                            return {
                                color: isActive && "skyblue"
                            }
                        }}>Contact</NavLink></li>
                    </ul>
                </nav>

                <div className="menu-icon" onClick={toggleMenu} >
                    <GiHamburgerMenu onClick={handleMenuButton} className="ham" />
                </div>
            </div>
        </header>
    );
}