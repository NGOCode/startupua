import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { BrowserRouter } from "react-router-dom";

import './main.scss';

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('react-target')
    );
});
