import React from 'react';
import { useForm } from 'react-hook-form';

import countries from '/imports/domains/services/euro-countries.json';

export const ServiceForm = props => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form className="wrapped-content form add-provider-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <legend>
                    Business relocation help
                </legend>
                <ul>
                    <li>
                        <label htmlFor="service-contact">
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
                        <label htmlFor="service-type">
                            Type
                        </label>
                        <select
                            defaultValue={props.type}
                            id="service-type"
                            {...register('type')}
                        >
                            <option>
                                Accounting
                            </option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="service-country">
                            Country
                        </label>
                        <select
                            defaultValue={props.country}
                            id="service-country"
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
                        <label htmlFor="service-title">
                            Title
                        </label>
                        <input
                            defaultValue={props.title}
                            type="text"
                            id="service-title"
                            required
                            size="50"
                            {...register('title')}
                        />
                    </li>
                    <li>
                        <label htmlFor="service-desc">
                            Description
                        </label>
                        <textarea
                            defaultValue={props.description}
                            id="service-desc"
                            cols="45"
                            rows="5"
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
                >
                    Submit
                </button>
            </fieldset>
        </form>
    );
};
