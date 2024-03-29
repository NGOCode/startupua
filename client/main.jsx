import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { App } from '/imports/ui/App';
import { BrowserRouter } from "react-router-dom";

import './main.scss';

Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    
    // change to push
    root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    );
});
