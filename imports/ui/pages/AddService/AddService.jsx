import React  from 'react';
import { useNavigate, Link } from "react-router-dom";

import { ServiceForm } from '../../components/ServiceForm/ServiceForm';

export const AddService = () => {
    const navigate = useNavigate();
    
    const onSubmit = data => {
        Meteor.call('service.insert', data, error => {
            if (!error) {
                navigate('/services');
            }
        });
    };
    
    return (
        <div className="add-service">
            <Link to="/services/my-offers" className="back-action">
                ← Back
            </Link>
            <h1>
                Publish help offer
            </h1>
            <div className="form-container">
                <ServiceForm
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};
