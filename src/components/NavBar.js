import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <nav class="uk-navbar">
                <div class="uk-navbar-center">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active">
                            <Link to="/">home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar