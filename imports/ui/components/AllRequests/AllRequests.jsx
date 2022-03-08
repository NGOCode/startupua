import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { RequestsCollection } from '/imports/domains/requests/collection';
import { RequestItem } from '../RequestItem/RequestItem.jsx';

export const AllRequestsList = () => {
    const { loading, requests } = useTracker(() => {
        const handler = Meteor.subscribe('allRequests');
        const requests = RequestsCollection.find({ solved: false }).fetch();
        
        return {
            loading: !handler.ready(),
            requests
        };
    });
    
    return (
        <div className="all-requests">
            {loading ?
                <span>
                    Loading
                </span>
                :
                <ul className="cards-list all-requests-list">
                    {requests.map(request => (
                        <RequestItem
                            key={request._id}
                            {...request}
                            linkTo={`/requests/${request._id}`}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};
