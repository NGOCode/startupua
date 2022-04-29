import React  from 'react';
import { useForm } from 'react-hook-form';

export const ContactFormDeck = props => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form className="form contact-form deck-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <ul>
                    <li>
                        <label htmlFor="message">
                            Your full name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            {...register('name')}
                        />
                    </li>
                    <li>
                        <label htmlFor="message">
                            Your company or fund
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            required
                            {...register('companyName')}
                        />
                    </li>
                </ul>
                <button
                    type="submit"
                    disabled={props.sending}
                >
                    Request deck
                </button>
            </fieldset>
        </form>
    );
};
