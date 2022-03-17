import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from "react-router-dom";

import { RequestsCollection } from '/imports/domains/requests/collection';

import { OpenGraphReader } from '../../components';
import { ContactForm } from '../../components/ContactForm/ContactForm';

import countries from '/imports/domains/services/euro-countries.json';

import './single-request.scss';

export const SingleRequest = () => {
    const [messageSent, setMessageSent] = useState(false);
    const params = useParams();
    const [sending, setSending] = useState(false);
    const { loading, request } = useTracker(() => {
        const handler = Meteor.subscribe('singleRequest', { requestId: params.requestId });
        const request = RequestsCollection.findOne({ _id: params.requestId });
        
        return {
            loading: !handler.ready(),
            request
        };
    });
    
    const onSubmit = data => {
        setSending(true);
        
        if (!messageSent) {
            Meteor.call('request.contact', {
                requestId: params.requestId,
                message: data.message
            }, error => {
                if (!error) {
                    setMessageSent(true);
                }
    
                setSending(false);
            });
        }
    }
    
    const country = request ? countries.find(country => country.code === request.country) : null;
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="single-request">
                <div className="wrapped-content">
                    <div className="request-content">
                        <h5>
                            {request.category}{request.country ? `/ ${country.name}` : null}
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
                        {request.company &&
                        <h4>
                            {request.company}
                        </h4>
                        }
                        <ul>
                            {request.website &&
                            <li>
                                {request.website}
                            </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="actions">
                    <div className="wrapped-content">
                        <div>
                            {messageSent ?
                                <h3>
                                    Message sent, thanks for helping. Check your emails.
                                </h3>
                                :
                                <>
                                    <h3>
                                        Offer help
                                    </h3>
                                    <p>
                                        An email will be sent to you and the person asking for help. You can carry on with the discussion using any means you see fit.
                                    </p>
                                    <ContactForm onSubmit={onSubmit} sending={sending} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}
