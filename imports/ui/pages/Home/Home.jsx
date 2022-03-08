import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export const Home = () => {
    return (
        <div className="page-content home">
            <div className="wrapped-content banner">
                <div className="banner-content">
                    <h1>
                        Get help from other EU founders
                    </h1>
                    <p className="banner-description">
                        Ask other startup founders in the EU for advice or help regarding.
                        Leverage a network of people willing to help out so you can keep you project afloat in these troubled times.
                    </p>
                </div>
                <figure className="banner-image">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                </figure>
            </div>
            
            <div className="choose-profile">
                <ul className="wrapped-content actions">
                    <li>
                        <Link to="/business" className="button">
                            I have a request
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-provider" className="button btn-alt">
                            I can offer help
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
