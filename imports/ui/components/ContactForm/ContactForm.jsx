import { Meteor } from 'meteor/meteor';
import React  from 'react';
import { useForm } from 'react-hook-form';

export const ContactForm = props => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form className="form add-request-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <ul>
                    <li>
                        <label htmlFor="name">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            {...register('name')}
                        />
                    </li>
                    <li>
                        <label htmlFor="email">
                            Your contact email
                        </label>
                        <input
                            type="text"
                            id="email"
                            required
                            placeholder="you@email.com"
                            {...register('email')}
                        />
                    </li>
                    <li>
                        <label htmlFor="comment">
                            Comment to add (optional)
                        </label>
                        <textarea
                            id="comment"
                            cols="45"
                            rows="5"
                            {...register('comment')}
                        />
                    </li>
                </ul>
                <button
                    type="submit"
                >
                    Send email
                </button>
            </fieldset>
        </form>
    );
};
