import React  from 'react';
import { useNavigate, Link } from "react-router-dom";

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
        <div className="add-request">
            <Link to="/requests/my-requests" className="back-action">
                ← Back
            </Link>
            <h1>
                I need help with my startup
            </h1>
            <div className="form-container">
                <RequestForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};
