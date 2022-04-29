import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { RequestsCollection } from '/imports/domains/requests/collection';

import { RequestItem } from '../../components/RequestItem/RequestItem.jsx';

import './all-decks.scss';

export const AllDecks = () => {
    const { loading, requests } = useTracker(() => {
        const handler = Meteor.subscribe('allRequests');
        const query = {
            solved: false,
            category: 'Fundraising'
        };
        
        const requests = RequestsCollection.find(query, { sort: { createdAt: -1 }}).fetch();
        
        return {
            loading: !handler.ready(),
            requests
        };
    });
    
    return (
        loading ?
            <span>
                Loading
            </span>
            :
            <div className="all-decks">
                {requests && requests.length > 0 ?
                    <ul className="all-decks-list">
                        {requests.map(request => (
                            <RequestItem
                                key={request._id}
                                {...request}
                                linkTo={`/fundraising/decks/${request._id}`}
                            />
                        ))}
                    </ul>
                    :
                    <div className="no-results">
                        No results
                    </div>
                }
            </div>
    );
}
