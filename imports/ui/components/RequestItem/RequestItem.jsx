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
                <h3 className="company-name">
                    {props.company}
                </h3>
                <span className="title">
                    {props.title}
                </span>
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
