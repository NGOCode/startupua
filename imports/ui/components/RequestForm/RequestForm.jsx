import React  from 'react';
import { useForm } from 'react-hook-form';

import countries from '/imports/domains/services/euro-countries.json';
import { categories } from '/imports/domains/categories';

export const RequestForm = props => {
    const { register, handleSubmit } = useForm();
    return (
        <form className="wrapped-content form add-request-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <legend>
                    I need help with my startup
                </legend>
                <ul>
                    <li>
                        <label htmlFor="request-company">
                            Company name
                        </label>
                        <input
                            defaultValue={props.company}
                            type="text"
                            id="request-company"
                            required
                            placeholder="Company Name Ltd"
                            {...register('company')}
                        />
                    </li>
                    <li>
                        <label htmlFor="request-website">
                            Website
                        </label>
                        <input
                            defaultValue={props.website}
                            type="text"
                            id="request-website"
                            size="40"
                            required
                            placeholder="https://"
                            {...register('website')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-contact">
                            Contact details
                        </label>
                        <input
                            defaultValue={props.contact}
                            type="text"
                            id="request-contact"
                            placeholder="Your name"
                            required
                            {...register('contact')}
                        />
                    </li>
                    <li>
                        <label htmlFor="request-country">
                            Country
                        </label>
                        <select
                            defaultValue={props.country}
                            id="request-country"
                            {...register('country')}
                        >
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </li>
                    <li>
                        <label htmlFor="request-category">
                            Category
                        </label>
                        <select
                            defaultValue={props.category}
                            id="request-category"
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
                        <label htmlFor="request-title">
                            Title
                        </label>
                        <input
                            defaultValue={props.title}
                            type="text"
                            id="request-title"
                            size="50"
                            required
                            placeholder="I need help with paperwork for visa application"
                            {...register('title')}
                        />
                    </li>
                    <li>
                        <label htmlFor="request-desc">
                            Description
                        </label>
                        <textarea
                            defaultValue={props.description}
                            id="request-desc"
                            cols="45"
                            rows="5"
                            placeholder="describe in detail what you are looking for, it will make it easier to get help"
                            {...register('description')}
                        />
                    </li>
                </ul>
                <button
                    type="submit"
                >
                    Submit
                </button>
            </fieldset>
        </form>
    );
};
