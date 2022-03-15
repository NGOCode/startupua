import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './header.scss';

export const Header = () => {
    const { pathname } = useLocation();
    const isService = pathname.indexOf('service') !== -1;
    const isRequest = pathname.indexOf('request') !== -1;
    
    return (
        <header className="main-header">
            <Link className="branding" to="/">
                <figure className="logo">
                    <img src="/logo.png"/>
                </figure>
                <span className="brand-name">
                    UA Founders
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
                        <Link to="/service" className={cn({ selected: isService })}>
                            Offer help
                        </Link>
                    </li>
                    <li>
                        <Link to="/request" className={cn({ selected: isRequest })}>
                            Ask for help
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
