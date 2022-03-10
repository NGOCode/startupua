import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { RequestsCollection } from '/imports/domains/requests/collection';

import { RequestItem } from '../RequestItem/RequestItem.jsx';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter.jsx';

export const AllRequestsList = () => {
    const [categoryFilter, setCategoryFilter] = useState(null);
    
    function handleFilterClicked(category) {
        if(categoryFilter === category) {
            setCategoryFilter(null);
        } else {
            setCategoryFilter(category);
        }
    }
    
    const { loading, requests } = useTracker(() => {
        const handler = Meteor.subscribe('allRequests');
        const query = {
            solved: false
        };
        
        if (categoryFilter) {
            query.category = categoryFilter;
        }
        
        const requests = RequestsCollection.find(query).fetch();
        
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
            <div className="all-requests">
                <CategoriesFilter
                    selectedCategory={categoryFilter}
                    handleClicked={handleFilterClicked}
                />
                {requests && requests.length > 0 ?
                    <ul className="cards-list all-requests-list">
                        {requests.map(request => (
                            <RequestItem
                                key={request._id}
                                {...request}
                                linkTo={`/requests/${request._id}`}
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
};
