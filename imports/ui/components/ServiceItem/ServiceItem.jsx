import React from 'react';
import { Link } from 'react-router-dom';

import { truncateString } from '../../utils';

import './service-item.scss';

export const ServiceItem = props => {
    return (
        <li className="service-item">
            <Link to={props.linkTo}>
                <span className="category">
                    {props.category}
                </span>
                <h3 className="title">
                    {truncateString(props.title, 120)}
                </h3>
                <p className="description">
                    {props.description}
                </p>
            </Link>
        </li>
    );
}
