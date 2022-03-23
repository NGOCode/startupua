import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { RequestsCollection } from '/imports/domains/requests/collection';

import { RequestItem } from '../RequestItem/RequestItem.jsx';

export const MyRequestsList = () => {
    const { loading, requests } = useTracker(() => {
        const handler = Meteor.subscribe('myRequests');
        const requests = RequestsCollection.find({ solved: false }).fetch();
        
        return {
            loading: !handler.ready(),
            requests
        };
    });
    
    return (
        <div className="my-requests-container">
            {loading ?
                <span>
                    Loading
                </span>
                :
                <ul className="my-requests-list">
                    <li className="request-item add-placeholder">
                        <Link
                            to="add"
                            className="button"
                        >
                            Publish new request
                        </Link>
                    </li>
                    {requests.map(request => (
                        <RequestItem
                            key={request._id}
                            {...request}
                            linkTo={`/ask-help/my-requests/${request._id}/edit`}
                        />
                    ))}
                </ul>
            }
        </div>
    );
};
