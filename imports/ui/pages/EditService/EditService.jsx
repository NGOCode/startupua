import React  from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { ServicesCollection } from '/imports/domains/services/collection';

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

import './edit-service.scss';

export const EditService = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { loading, service } = useTracker(() => {
        const handler = Meteor.subscribe('singleService', { serviceId: params.serviceId });
        const service = ServicesCollection.findOne({ _id: params.serviceId });
        
        return {
            loading: !handler.ready(),
            service
        };
    });
    const onSubmit = data => {
        Meteor.call('service.update', {
            serviceId: params.serviceId,
            service: data
        }, error => {
            if (!error) {
                navigate('/service');
            }
        });
    };
    const deleteService = () => {
        Meteor.call('service.remove', {
            serviceId: params.serviceId
        });
        navigate('/service');
    };
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="edit-service">
                <Link to="/services/my-offers" className="back-action">
                    ← Back
                </Link>
                <h1>
                    Edit your offer
                </h1>
                <div className="form-container">
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
