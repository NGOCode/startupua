import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
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
    )
}
