import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Outlet } from "react-router-dom";

import {
    LoginForm
} from '../../components';

import './fundraising.scss';

export const Fundraising = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="fundraising">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h2>
                            Fundraising
                        </h2>
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
