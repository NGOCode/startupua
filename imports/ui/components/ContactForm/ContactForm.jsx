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
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            {...register('message')}
                        />
                    </li>
                    <li>
                        An email will be sent to you and the person asking for help. You can carry on with the discussion using any means you see fit.
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
