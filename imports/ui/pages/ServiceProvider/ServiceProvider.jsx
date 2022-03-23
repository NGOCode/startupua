import React from 'react';
import cn from 'classnames';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import {
    LoginForm
} from '../../components';

import './service-provider.scss';

export const ServiceProvider = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="service-provider">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h2>
                            Offer Help
                        </h2>
                        <ul className="sub-nav">
                            <li>
                                <NavLink
                                    to="/offer-help/all-requests"
                                    className={({ isActive }) =>
                                        cn('button', { active: isActive })
                                    }
                                >
                                    Answer requests
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/offer-help/my-offers'
                                    className={({ isActive }) =>
                                        cn('button', { active: isActive })
                                    }
                                >
                                    Your offers
                                </NavLink>
                            </li>
                        </ul>
                        <div className="page-content">
                            <Outlet />
                        </div>
                    </div>
                </>
                :
                <div className="wrapped-content">
                    <LoginForm/>
                </div>
            }
        </div>
    )
}
