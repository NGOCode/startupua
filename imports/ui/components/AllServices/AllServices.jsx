import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { ServicesCollection } from '/imports/domains/services/collection';

import { ServiceItem } from '../ServiceItem/ServiceItem.jsx';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter.jsx';

export const AllServicesList = () => {
    const [categoryFilter, setCategoryFilter] = useState(null);
    
    function handleFilterClicked(category) {
        if(categoryFilter === category) {
            setCategoryFilter(null);
        } else {
            setCategoryFilter(category);
        }
    }
    const { loading, services } = useTracker(() => {
        const handler = Meteor.subscribe('allServices');
        const query = {};
    
        if (categoryFilter) {
            query.category = categoryFilter;
        }
        
        const services = ServicesCollection.find(query).fetch();
        
        return {
            loading: !handler.ready(),
            services
        };
    });
    
    return (
        loading ?
            <span>
                Loading
            </span>
            :
            <div className="services">
                <CategoriesFilter
                    selectedCategory={categoryFilter}
                    handleClicked={handleFilterClicked}
                />
                {services && services.length > 0 ?
                    <ul className="all-services-list">
                        {services.map(service => (
                            <ServiceItem
                                key={service._id}
                                {...service}
                                linkTo={`/services/${service._id}`}
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
