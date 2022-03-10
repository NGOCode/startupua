import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import {
    LoginForm,
    MyRequestsList,
    AllServicesList
} from '../../components';

import './business.scss';

export const Business = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="business">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h2>
                            <span>
                                Your requests
                            </span>
                            <Link to='add-request' className="button">
                                Ask for help
                            </Link>
                        </h2>
                    </div>
                    <div className="my-requests-container">
                        <div className="wrapped-content">
                            <MyRequestsList />
                        </div>
                    </div>
                    <div className="all-services-container">
                        <div className="wrapped-content">
                            <h2>
                                Help offered
                            </h2>
                            <AllServicesList />
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
