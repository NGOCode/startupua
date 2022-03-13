import { Meteor } from 'meteor/meteor';
import React  from 'react';

export const LoginForm = () => {
    const login = e => {
        e.preventDefault();
        
        Meteor.loginWithGoogle();
    };
    
    return (
        <div className="login-form">
            <button
                onClick={login}
            >
                Login with Google
            </button>
        </div>
    );
};
