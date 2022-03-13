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
                            required
                            {...register('message')}
                        />
                    </li>
                </ul>
                <button
                    type="submit"
                    disabled={props.sending}
                >
                    Send email
                </button>
            </fieldset>
        </form>
    );
};
