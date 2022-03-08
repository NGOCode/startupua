import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import {
    LoginForm,
    MyServicesList,
    AllRequestsList
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
                            <span>
                                Your services
                            </span>
    
                            <Link to='add-service' className="button btn-alt">
                                Offer help
                            </Link>
                        </h2>
                        <MyServicesList />
                    </div>
                  
                    <div className="all-requests-container">
                        <div className="wrapped-content">
                            <h2>
                                Help needed
                            </h2>
                            <AllRequestsList />
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
