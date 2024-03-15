import React from "react";
import logo from '../Images/littlelemon_logo.png'
import hamburguer from '../Images/icon _hamburger.svg'
const Nav = () => {
    return (
        <nav>
            <a href="/">
             <img src={logo} alt="Little Lemon logo"/>   
            </a>
            {/*mobile nav bar*/}
            <a href="/">
              <img src={hamburguer} alt="Menu icon"/> 
            </a>
            <ul>
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