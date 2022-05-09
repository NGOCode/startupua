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
                <figure className="logo-mobile">
                    <img src="/logo-square.png"/>
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
                        <NavLink to="/offer-help" className={({ isActive }) => cn({ active: isActive })}>
                            Offer help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ask-help" className={({ isActive }) => cn({ active: isActive })}>
                            Ask for help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/fundraising" className={({ isActive }) => cn({ active: isActive })}>
                            Fundraising
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
