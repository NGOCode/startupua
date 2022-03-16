import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import {
    LoginForm,
    AllRequestsList
} from '../../components';

import './all-requests.scss';

export const AllRequests = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="requests">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h1>
                           Offer help
                        </h1>
                        <AllRequestsList />
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
