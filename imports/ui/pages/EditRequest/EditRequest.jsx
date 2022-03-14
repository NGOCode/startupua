import React  from 'react';
import { useNavigate } from "react-router-dom";
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
                navigate('/business');
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
        navigate('/business');
    };
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="wrapped-content">
                <h1>
                    I need help with my startup
                </h1>
                <div className="edit-request">
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
