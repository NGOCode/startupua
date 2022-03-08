import { Meteor } from 'meteor/meteor';
import React  from 'react';

export const LoginForm = () => {
    const login = e => {
        e.preventDefault();
        
        Meteor.loginWithGoogle();
    };
    
    return (
        <button
            onClick={login}
        >
            Login with Google
        </button>
    );
};
