import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export const Home = () => {
    return (
        <div className="page-content home">
            <div className="banner">
                <div className="banner-content">
                    <h1>
                        Ukrainian Entrepreneur? Get help from the international business community
                    </h1>
                    <p className="banner-description">
                        Ask for help or offer it.
                        Leverage a network of people willing to help out so you can keep your project afloat in these troubled times.
                    </p>
                </div>
                <div className="choose-profile">
                    <ul className="actions">
                        <li>
                            <Link to="/ask-help" className="button">
                                I have a request
                            </Link>
                        </li>
                        <li>
                            <Link to="/offer-help" className="button btn-alt">
                                I can offer help
                            </Link>
                        </li>
                        <li className="all-offers">
                            <Link to="/ask-help/all-offers">
                                See all offers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="more-info">
                <ul className="">
                    <li>
                        <h3>
                            🙏 Have a request?
                        </h3>
                        <p>
                            Keeping your business alive is a small thing to do in war times, but it will be very
                            valuable for your country's economy and your people. If there is anything global founders
                            can help you with, feel free to create a new request or browse the list of offers already published.
                        </p>
                    </li>
                    <li>
                        <h3>
                            ✋ Want to help?
                        </h3>
                        <p>
                            If you have crisis management experience, a network to share, available resources or
                            some spare time and you want to help Ukrainian entrepreneurs during this difficult
                            time, you can publish your offer here. You can also browser a list of requests and
                            see if you can help out with existing ones.
                        </p>
                    </li>
                </ul>
                <a
                    className="ph-link"
                    href="https://www.producthunt.com/posts/ua-founders?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ua&#0045;founders" target="_blank">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=341146&theme=light" alt="UA&#0032;Founders - Supporting&#0032;and&#0032;connecting&#0032;with&#0032;Ukrainian&#0032;entrepreneurs | Product Hunt"
                       style={{width: '200', height: '43.2px'}}
                       width="200"
                       height="43.2" />
                </a>
            </div>
        </div>
    )
}
