import React  from 'react';
import { useNavigate } from "react-router-dom";

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

export const AddService = () => {
    const navigate = useNavigate();
    
    const onSubmit = data => {
        Meteor.call('service.insert', data, error => {
            if (!error) {
                navigate('/service');
            }
        });
    };
    
    return (
        <div className="add-service wrapped-content">
            <h1>
                Offer help
            </h1>
            <div className="form-container">
                <ServiceForm
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};
