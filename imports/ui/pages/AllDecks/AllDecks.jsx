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
                <p>
                    UA Founders is trying to actively help UA Startups looking for funding by acting as intermediary between
                    founders and our network of investors. You can request decks and more info from us about the projects below
                    and we will also put you in touch directly with the founders if requested. We are not charging anything for this.
                </p>
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
