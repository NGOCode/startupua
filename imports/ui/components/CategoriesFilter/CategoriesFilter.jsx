import React from 'react';
import cn from 'classnames';

import { categories } from '/imports/domains/categories';

import './categories-filter.scss';

export const CategoriesFilter = props => {
    return (
        <ul className="categories-filter">
            {categories.filter(cat => cat !== 'Fundraising').map(category => (
                <li key={category}>
                    <button
                        type="button"
                        className={cn({ selected: category === props.selectedCategory })}
                        onClick={() => props.handleClicked(category)}
                    >
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    )
}
