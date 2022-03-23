import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Outlet, NavLink } from 'react-router-dom';
import cn from 'classnames';

import {
    LoginForm
} from '../../components';

import './requester.scss';

export const Requester = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="requester">
            {user ?
                <div className="wrapped-content">
                    <h2>
                        Ask for help
                    </h2>
                    <ul className="sub-nav">
                        <li>
                            <NavLink
                                to="/requests/all-offers"
                                className={({ isActive }) =>
                                    cn('button', { active: isActive })
                                }
                            >
                                Browse offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/requests/my-requests'
                                className={({ isActive }) =>
                                    cn('button', { active: isActive })
                                }
                            >
                                Your requests
                            </NavLink>
                        </li>
                    </ul>
                    <div className="page-content">
                        <Outlet />
                    </div>
                </div>
                :
                <div className="wrapped-content">
                    <LoginForm/>
                </div>
            }
        </div>
    )
}
