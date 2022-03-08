import React  from 'react';
import { useNavigate } from "react-router-dom";

import { RequestForm } from '../../components/RequestForm/RequestForm';

export const AddRequest = () => {
    const navigate = useNavigate();
    const onSubmit = data => {
        Meteor.call('request.insert', data, (error, response) => {
            if (!error) {
                navigate('/business');
            }
        });
    };
    
    return (
        <div className="add-request">
            <RequestForm onSubmit={onSubmit} />
        </div>
    );
};
