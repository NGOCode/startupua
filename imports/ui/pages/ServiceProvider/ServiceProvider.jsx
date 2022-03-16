import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import {
    LoginForm,
    MyServicesList
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
                    <div className="actions">
                        <div className="wrapped-content">
                            <Link
                                to="/service/all-needs"
                                className="button"
                            >
                                Browse requests
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
