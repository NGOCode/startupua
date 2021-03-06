import React from 'react';
import { useForm } from 'react-hook-form';

import countries from '/imports/domains/services/euro-countries.json';
import { categories } from '/imports/domains/categories';

export const ServiceForm = props => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form className="form add-provider-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <ul>
                    <li>
                        <label htmlFor="service-contact" className="for-required">
                            Contact details
                        </label>
                        <input
                            defaultValue={props.contact}
                            type="text"
                            id="service-contact"
                            placeholder="Your name"
                            required
                            {...register('contact')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-website" className="for-required">
                            Company website
                        </label>
                        <input
                            defaultValue={props.website}
                            type="text"
                            id="service-website"
                            placeholder="https://website.com"
                            required
                            {...register('website')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-country" className="for-required">
                            Is your offer for a specific country?
                        </label>
                        <select
                            defaultValue={props.country}
                            id="service-country"
                            {...register('country')}
                        >
                            <option key="any" value="any">
                                Any
                            </option>
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li>
                        <label htmlFor="service-category" className="for-required">
                            Category
                        </label>
                        <select
                            defaultValue={props.category}
                            id="service-category"
                            {...register('category')}
                        >
                            {categories.map(category => (
                                <option key={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li>
                        <label htmlFor="service-title" className="for-required">
                            Offer title
                        </label>
                        <input
                            defaultValue={props.title}
                            type="text"
                            id="service-title"
                            required
                            size="50"
                            maxLength="100"
                            {...register('title')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-desc" className="for-required">
                            Description
                        </label>
                        <textarea
                            defaultValue={props.description}
                            id="service-desc"
                            cols="45"
                            rows="15"
                            placeholder="Describe what you can help with"
                            {...register('description')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-free">
                            Are you ready to provide free consultation if needed?
                        </label>
                        <input
                            checked={props.free}
                            type="checkbox"
                            id="service-free"
                            {...register('free')}
                        />
                    </li>
                </ul>
                <button
                    type="submit"
                    className="btn-alt"
                >
                    Submit
                </button>
            </fieldset>
        </form>
    );
};
