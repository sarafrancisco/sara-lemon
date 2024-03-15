import React from "react";
import logo from '../Images/Logo .svg'
import hamburguer from '../Images/icon _hamburger.svg'

const Nav = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
             <img src={logo} alt="Little Lemon logo"/>   
            </a>
            {/*mobile nav bar*/}
            <a href="/" className="menu-icon">
              <img src={hamburguer} alt="Menu icon"/> 
            </a>
            <ul className="nav-links">
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/'>Reservations</a></li>
                <li><a href='/'>Order Online</a></li>
                 <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;