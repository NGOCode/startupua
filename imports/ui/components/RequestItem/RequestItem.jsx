import React from 'react';
import { Link } from 'react-router-dom';

import { truncateString } from '../../utils';

import './request-item.scss';

export const RequestItem = props => {
    return (
        <li className="card-item request-item">
            <Link to={props.linkTo} className="item-link">
                <span className="category">
                    {props.category}
                </span>
                <span className="company-name">
                    {props.company}
                </span>
                <h3 className="title">
                    {truncateString(props.title, 120)}
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
