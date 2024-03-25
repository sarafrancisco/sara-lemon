import React, { useState } from "react";
import logo from '../Images/Logo .svg';
import hamburguer from '../Images/icon _hamburger.svg';
import { Link } from "react-router-dom";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState (false)

    const toggleMenu = () => {
        setMenuOpen (!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/" className="logo">
             <img src={logo} alt="Little Lemon logo"/>
            </Link>
            <div className="menu-icon" onClick={toggleMenu}>
              <img src={hamburguer} alt="Menu icon"/>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
                <li><Link to='/' onClick={closeMenu}>Home</Link></li>
                <li><Link to='/' onClick={closeMenu}>About</Link></li>
                <li><Link to='/' onClick={closeMenu}>Menu</Link></li>
                <li><Link to='/Booking' onClick={closeMenu}>Reservations</Link></li>
                <li><Link to='/' onClick={closeMenu}>Order Online</Link></li>
                <li><Link to='/' onClick={closeMenu}>Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;