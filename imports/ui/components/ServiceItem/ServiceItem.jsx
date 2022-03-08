import React from 'react';
import { Link } from 'react-router-dom';

import './service-item.scss';

export const ServiceItem = props => {
    return (
        <li className="service-item">
            <Link to={props.linkTo}>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
            </Link>
        </li>
    );
}
