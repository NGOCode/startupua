import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { RequestsCollection } from '/imports/domains/requests/collection';

import { OpenGraphReader } from '../../components';
import { ContactForm } from '../../components/ContactForm/ContactForm';

import './single-request.scss';

export const SingleRequest = () => {
    const params = useParams();
    const { loading, request } = useTracker(() => {
        const handler = Meteor.subscribe('singleRequest', { requestId: params.requestId });
        const request = RequestsCollection.findOne({ _id: params.requestId });
        
        return {
            loading: !handler.ready(),
            request
        };
    });
    
    const onSubmit = data => {
        console.log(data);
    }
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="wrapped-content single-request">
                <div className="request-content">
                    <h5>
                        {request.type}
                    </h5>
                    <h1>
                        {request.title}
                    </h1>
                    <p className="description">
                        {request.description}
                    </p>
                </div>
                <div className="request-metadata">
                    <OpenGraphReader url={request.website} />
                    <h4>
                        {request.company}
                    </h4>
                    <ul>
                        <li>
                            {request.website}
                        </li>
                        <li>
                            {request.country}
                        </li>
                    </ul>
                </div>
                <div className="actions">
                    <h3>
                        Offer help
                    </h3>
                    <ContactForm onSubmit={onSubmit} />
                </div>
            </div>
    )
}
