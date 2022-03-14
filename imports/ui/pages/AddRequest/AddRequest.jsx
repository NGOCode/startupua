import React  from 'react';
import { useNavigate } from "react-router-dom";

import { RequestForm } from '../../components/RequestForm/RequestForm';

export const AddRequest = () => {
    const navigate = useNavigate();
    const onSubmit = data => {
        Meteor.call('request.insert', data, (error, response) => {
            if (!error) {
                navigate('/request');
            }
        });
    };
    
    return (
        <div className="add-request wrapped-content">
            <h1>
                I need help with my startup
            </h1>
            <div className="form-container">
                <RequestForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};
