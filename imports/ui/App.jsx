import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Nav } from './components/Nav.jsx';
import {
    Home,
    ServiceProvider,
    AddService,
    Business,
    AddRequest,
    SingleRequest,
    EditRequest,
    EditService
} from './pages';

export const App = () => (
    <div>
        <header>
            <Link className="branding" to="/">
                <figure className="logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png"/>
                </figure>
                <span className="brand-name">
                    Relocate Biz
                </span>
            </Link>
            <Nav/>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/service-provider" element={<ServiceProvider/>}/>
            <Route path="/service-provider/add-service" element={<AddService/>}/>
            <Route path="/services/:serviceId/edit" element={<EditService/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/business/add-request" element={<AddRequest/>}/>
            <Route path="/requests/:requestId" element={<SingleRequest/>}/>
            <Route path="/requests/:requestId/edit" element={<EditRequest/>}/>
        </Routes>
    </div>
);
