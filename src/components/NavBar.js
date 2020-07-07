import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="uk-navbar">
                <div className="uk-navbar-center">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/work">my work</Link>
                        </li>
                        <li>
                            <Link to="/skills">skills</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar