import React  from 'react';
import { useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { ServicesCollection } from '/imports/domains/services/collection';

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

import './edit-service.scss';

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
    
    const deleteService = () => {
        Meteor.call('service.remove', {
            serviceId: params.serviceId
        });
        navigate('/service-provider');
    };
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="wrapped-content">
                <h1>
                    Edit your service
                </h1>
                
                <div className="edit-service">
                    <ServiceForm
                        onSubmit={onSubmit}
                        {...service}
                    />
                    <div className="actions">
                        <button
                            className="btn-discreet"
                            onClick={deleteService}
                        >
                            Delete service
                        </button>
                    </div>
                </div>
            </div>
    );
};
