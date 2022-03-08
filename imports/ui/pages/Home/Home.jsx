import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="page-content home">
            <div className="wrapped-content banner">
                <div className="banner-content">
                    <h1>
                        Find a place for your business in the EU
                    </h1>
                    <p className="banner-description">
                    
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
                            I want to relocate
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-provider" className="button">
                            I can offer help
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
