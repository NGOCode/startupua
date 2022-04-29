import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, Link } from "react-router-dom";

import { RequestsCollection } from '/imports/domains/requests/collection';

import { OpenGraphReader } from '../../components';
import { ContactFormDeck } from '../../components/ContactForm/ContactFormDeck';

import countries from '/imports/domains/services/euro-countries.json';

import './single-deck.scss';

export const SingleDeck = () => {
    const [messageSent, setMessageSent] = useState(false);
    const params = useParams();
    const [sending, setSending] = useState(false);
    const { loading, request } = useTracker(() => {
        const handler = Meteor.subscribe('singleRequest', { requestId: params.deckId });
        const request = RequestsCollection.findOne({ _id: params.deckId });
        
        return {
            loading: !handler.ready(),
            request
        };
    });
    
    const onSubmit = data => {
        setSending(true);
        
        if (!messageSent) {
            Meteor.call('request.teamContact', {
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
            <div className="single-item single-request">
                <div className="request-content">
                    <Link to="/fundraising/all-decks" className="back-action">
                        ← Back
                    </Link>
                    <div>
                        <span className="category">
                            {request.category}
                        </span>
                        {(request.country && request.country !== 'any') &&
                        <span className="country">
                            {country.name}
                        </span>
                        }
                    </div>
                    <h1>
                        {request.title}
                    </h1>
                    <p className="description">
                        {request.description}
                    </p>
                </div>
                <div className="metadata">
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
                
                <div className="actions">
                    {messageSent ?
                        <h3>
                            Message sent, we will get back to you shortly.
                        </h3>
                        :
                        <>
                            <h3>
                                Request pitch deck
                            </h3>
                            <p>
                                An email will be sent to UA Founders and we will organise the information between you and the entrepreneur.
                            </p>
                            <ContactFormDeck onSubmit={onSubmit} sending={sending} />
                        </>
                    }
                </div>
            </div>
    )
}
