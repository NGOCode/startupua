import React from 'react';
import { Link } from 'react-router-dom';

import './request-item.scss';

export const RequestItem = props => {
    return (
        <li className="request-item">
            <Link to={props.linkTo}>
                <span className="category">
                    {props.category}
                </span>
                <span className="company-name">
                    {props.company}
                </span>
                <h3 className="title">
                    {props.title}
                </h3>
                <p className="description">
                    {props.description}
                </p>
                <p className="website">
                    {props.website}
                </p>
            </Link>
        </li>
    );
}
