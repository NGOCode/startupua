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
                    Relocate Biz
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
                            I help relocate
                        </Link>
                    </li>
                    <li>
                        <Link to="/business">
                            I need relocation
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
