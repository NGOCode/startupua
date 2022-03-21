import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './header.scss';

export const Header = () => {
    return (
        <header className={cn('main-header')}>
            <NavLink className="branding" to="/">
                <figure className="logo">
                    <img src="/logo.png"/>
                </figure>
                <span className="brand-name">
                    UA Founders
                </span>
            </NavLink>
            <nav className="main-nav">
                <ul>
                    <li className="home">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" activeClassName>
                            Offer help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/request" activeClassName>
                            Ask for help
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
