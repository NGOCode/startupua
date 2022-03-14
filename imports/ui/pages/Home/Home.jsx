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
                        <Link to="/request" className="button">
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
            <div className="more-info">
                <ul className="wrapped-content">
                    <li>
                        <h3>
                            Have a request?
                        </h3>
                        <p>
                            Keeping you business alive is a small thing to do in war times, but it will prove
                            very valuable for your country and your people. If there is anything EU founders can help you with,
                            feel free to create a new request or browse the list of things people have offered to help with.
                        </p>
                    </li>
                    <li>
                        <h3>
                            Want to help?
                        </h3>
                        <p>
                            If you have crisis management experience, contacts or some spare time and
                            resources and want to participate in
                            helping Ukrainian startups weather this difficult time, you can post about the different things you can offer.
                            You can also browser a list of requests from UA founders and see if you can help out.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
