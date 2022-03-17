import React from 'react';
import { Link } from 'react-router-dom';

import { OpenGraphReader } from '../OpenGraphReader';

import './request-item.scss';

export const RequestItem = props => {
    return (
        <li className="request-item">
            <Link to={props.linkTo}>
                <span className="company-name">
                    {props.company}
                </span>
                <h4 className="title">
                    {props.title}
                </h4>
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
