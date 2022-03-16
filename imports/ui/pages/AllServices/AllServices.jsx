import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import {
    LoginForm,
    AllServicesList
} from '../../components';

import './all-services.scss';

export const AllServices = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="all-services">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h1>
                           Find help
                        </h1>
                        <AllServicesList />
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
