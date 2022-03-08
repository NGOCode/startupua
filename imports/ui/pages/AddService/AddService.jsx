import React  from 'react';
import { useNavigate } from "react-router-dom";

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

export const AddService = () => {
    const navigate = useNavigate();
    
    const onSubmit = data => {
        Meteor.call('service.insert', data, error => {
            if (!error) {
                navigate('/service-provider');
            }
        });
    };
    
    return (
        <div className="add-service">
            <ServiceForm
                onSubmit={onSubmit}
            />
        </div>
    );
};
