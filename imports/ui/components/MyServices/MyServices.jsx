import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { ServicesCollection } from '/imports/domains/services/collection';
import { ServiceItem } from '../ServiceItem/ServiceItem';

export const MyServicesList = () => {
    const { loading, services } = useTracker(() => {
        const handler = Meteor.subscribe('myServices');
        const services = ServicesCollection.find().fetch();
        
        return {
            loading: !handler.ready(),
            services
        }
    });
    
    return (
        <div className="my-services">
            {loading ?
                <span>
                    Loading
                </span>
                :
                <ul className="my-services-list">
                    <li className="request-item add-placeholder">
                        <Link
                            to="add"
                            className="button btn-alt"
                        >
                            Publish new offer
                        </Link>
                    </li>
                    {services.map(service => (
                        <ServiceItem
                            key={service._id}
                            {...service}
                            linkTo={`/services/my-offers/${service._id}/edit`}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};
