import React  from 'react';
import { useForm } from 'react-hook-form';

export const ContactFormDeck = props => {
    const { register, handleSubmit } = useForm();
    
    return (
        <form className="form contact-form deck-form" onSubmit={handleSubmit(props.onSubmit)}>
            <fieldset>
                <ul>
                    <li>
                        <label htmlFor="contactName">
                            Your full name
                        </label>
                        <input
                            type="text"
                            id="contactName"
                            required
                            {...register('contactName')}
                        />
                    </li>
                    <li>
                        <label htmlFor="companyName">
                            Your company or fund's name
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
