import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export const Header = () => {
    return (
        <header className="main-header">
            <Link className="branding" to="/">
                <figure className="logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png"/>
                </figure>
                <span className="brand-name">
                    Startup UA Help board
                </span>
            </Link>
            <nav className="main-nav">
                <ul>
                    <li className="home">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-provider">
                            Offer help
                        </Link>
                    </li>
                    <li>
                        <Link to="/business">
                            Ask for help
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
