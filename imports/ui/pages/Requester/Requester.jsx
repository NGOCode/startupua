import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import {
    LoginForm,
    MyRequestsList
} from '../../components';

import './requester.scss';

export const Requester = () => {
    const user = useTracker(() => Meteor.user());
    
    return (
        <div className="requester">
            {user ?
                <>
                    <div className="wrapped-content">
                        <h2>
                            <span>
                                Your requests
                            </span>
                            <Link to='add-request' className="button">
                                Post a new request
                            </Link>
                        </h2>
                    </div>
                    <div className="my-requests-container">
                        <div className="wrapped-content">
                            <MyRequestsList />
                        </div>
                    </div>
                    <div className="actions">
                        <div className="wrapped-content">
                            <Link
                                to="/request/all-offers"
                                className="button btn-alt"
                            >
                                Browse the help offered
                            </Link>
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
