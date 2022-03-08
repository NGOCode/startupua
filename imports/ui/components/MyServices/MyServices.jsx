import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

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
                <ul className="cards-list my-services-list">
                    {services.map(service => (
                        <ServiceItem
                            key={service._id}
                            {...service}
                            linkTo={`/services/${service._id}/edit`}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};
