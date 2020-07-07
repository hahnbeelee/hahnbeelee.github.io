import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <ul className="uk-navbar-nav">
                <li id="home">
                    <Link to="/" id="a" className="nav">hahnbee lee</Link>
                </li>
                <li>
                    <Link to="/about" className="nav">about</Link>
                </li>
                <li>
                    <Link to="/work" className="nav">my work</Link>
                </li>
                <li>
                    <Link to="/skills" className="nav">skills</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar