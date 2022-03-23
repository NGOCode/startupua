import React  from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { RequestsCollection } from '/imports/domains/requests/collection';

import { RequestForm } from '../../components/RequestForm/RequestForm';

import './edit-request.scss';

export const EditRequest = () => {
    const navigate = useNavigate();
    const params = useParams();
    const onSubmit = data => {
        Meteor.call('request.update', {
            requestId: params.requestId,
            request: data
        }, error => {
            if (!error) {
                navigate('/request');
            }
        });
    };
    const { loading, request } = useTracker(() => {
        const handler = Meteor.subscribe('singleRequest', { requestId: params.requestId });
        const request = RequestsCollection.findOne({ _id: params.requestId });
        
        return {
            loading: !handler.ready(),
            request
        };
    });
    const closeRequest = () => {
        Meteor.call('request.close', {
            requestId: params.requestId
        });
        navigate('/request');
    };
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="edit-request">
                <Link to="/requests/my-requests" className="back-action">
                    ← Back
                </Link>
                <h1>
                    Edit your request
                </h1>
                <div className="form-container">
                    <RequestForm
                        onSubmit={onSubmit}
                        {...request}
                    />
                    <div className="actions">
                        <button
                            className="btn-discreet"
                            onClick={closeRequest}
                        >
                            Close request
                        </button>
                    </div>
                </div>
            </div>
    );
};
