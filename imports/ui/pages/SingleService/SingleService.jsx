import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, Link } from "react-router-dom";

import { ServicesCollection } from '/imports/domains/services/collection';

import { ContactForm } from '../../components/ContactForm/ContactForm';

import countries from '/imports/domains/services/euro-countries.json';

import './single-service.scss';

export const SingleService = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [sending, setSending] = useState(false);
    const params = useParams();
    const { loading, service } = useTracker(() => {
        const handler = Meteor.subscribe('singleService', { serviceId: params.serviceId });
        const service = ServicesCollection.findOne({ _id: params.serviceId });
        
        return {
            loading: !handler.ready(),
            service
        };
    });
    
    const onSubmit = data => {
        setSending(true);
        
        if (!messageSent) {
            Meteor.call('service.contact', {
                serviceId: params.serviceId,
                message: data.message
            }, error => {
                if (!error) {
                    setMessageSent(true);
                }
                setSending(false);
            });
        }
    }
    
    const country = service ? countries.find(country => country.code === service.country) : null;
    
    return (
        loading ?
            <span>loading</span>
            :
            <div className="single-service">
                <div className="service-content">
                    <Link to="/ask-help" className="back-action">
                        ← Back
                    </Link>
                    <h5>
                        {service.category}{(service.country && service.country !== 'any') ? `/ ${country.name}` : null}
                    </h5>
                    <h1>
                        {service.title}
                    </h1>
                    <p className="description">
                        {service.description}
                    </p>
                </div>
                <div className="service-metadata">
                    <ul>
                        {service.website &&
                        <li>
                            {service.website}
                        </li>
                        }
                        {service.country &&
                        <li>
                            {service.country}
                        </li>
                        }
                    </ul>
                </div>
                <div className="actions">
                    {messageSent ?
                        <h3>
                            Message sent. Check your emails.
                        </h3>
                        :
                        <>
                            <h3>
                                Reply to offer
                            </h3>
                            <p>
                                An email will be sent to you and the person offering help. You can carry on with the discussion using any means you see fit.
                            </p>
                            <ContactForm onSubmit={onSubmit} sending={sending} />
                        </>
                    }
                </div>
            </div>
    )
}
