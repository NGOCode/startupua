import { Meteor } from 'meteor/meteor';
import React  from 'react';

export const LoginForm = () => {
    const login = e => {
        e.preventDefault();
        
        Meteor.loginWithGoogle();
    };
    
    return (
        <div className="login-form">
            <h1>
                Let us know who you are
            </h1>
            <h4>
                We will not share or use your email in any way apart to put you in touch with people on this website.
            </h4>
            <button
                onClick={login}
            >
                Login with Google
            </button>
        </div>
    );
};
