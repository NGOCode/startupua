import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { ServicesCollection } from '/imports/domains/services/collection';
import { ServiceItem } from '../ServiceItem/ServiceItem.jsx';

export const AllServicesList = () => {
    const { loading, services } = useTracker(() => {
        const handler = Meteor.subscribe('allServices');
        const services = ServicesCollection.find().fetch();
        
        return {
            loading: !handler.ready(),
            services
        };
    });
    
    return (
        <div className="services">
            {loading ?
                <span>
                    Loading
                </span>
                :
                <ul className="cards-list all-services-list">
                    {services.map(service => (
                        <ServiceItem
                            key={service._id}
                            {...service}
                            linkTo={`/services/${service._id}`}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};
