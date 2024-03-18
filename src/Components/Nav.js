import React, { useState } from "react";
import logo from '../Images/Logo .svg'
import hamburguer from '../Images/icon _hamburger.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState (false)

    const toggleMenu = () => {
        setMenuOpen (!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
             <img src={logo} alt="Little Lemon logo"/>
            </a>
            <a href="/" className="menu-icon" onClick={toggleMenu}>
              <img src={hamburguer} alt="Menu icon"/>
            </a>
            <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/Booking'>Reservations</a></li>
                <li><a href='/'>Order Online</a></li>
                 <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;