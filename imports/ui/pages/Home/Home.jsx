import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export const Home = () => {
    return (
        <div className="page-content home">
            <div className="wrapped-content banner">
                <div className="banner-content">
                    <h1>
                        Get help from other entrepreneurs
                    </h1>
                    <p className="banner-description">
                        Ask for advice or help.
                        Leverage a network of people willing to help out so you can keep your project afloat in these troubled times.
                    </p>
                </div>
                <div className="choose-profile">
                    <ul className="actions">
                        <li>
                            <Link to="/request" className="button">
                                I have a request
                            </Link>
                        </li>
                        <li>
                            <Link to="/service" className="button btn-alt">
                                I can offer help
                            </Link>
                        </li>
                    </ul>
                </div>
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
