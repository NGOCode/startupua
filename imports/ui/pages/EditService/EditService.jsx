import React  from 'react';
import { useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { ServicesCollection } from '/imports/domains/services/collection';

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

export const EditService = () => {
    const navigate = useNavigate();
    const params = useParams();
    const onSubmit = data => {
        Meteor.call('service.update', {
            serviceId: params.serviceId,
            service: data
        }, error => {
            if (!error) {
                navigate('/service-provider');
            }
        });
    };
    const { loading, service } = useTracker(() => {
        const handler = Meteor.subscribe('singleService', { serviceId: params.serviceId });
        const service = ServicesCollection.findOne({ _id: params.serviceId });
        
        return {
            loading: !handler.ready(),
            service
        };
    });
    
    return (
        <div className="edit-service">
            {loading ?
                <span>loading</span>
                :
                <ServiceForm
                    onSubmit={onSubmit}
                    {...service}
                />
            }
        </div>
    );
};
