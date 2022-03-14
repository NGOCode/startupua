import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Header, Footer } from './components';
import {
    Home,
    ServiceProvider,
    AddService,
    RequestAsker,
    AddRequest,
    SingleService,
    SingleRequest,
    EditRequest,
    EditService
} from './pages';

export const App = () => (
    <div>
        <Header />
        <div className="page">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/service-provider" element={<ServiceProvider/>}/>
                <Route path="/service-provider/add-service" element={<AddService/>}/>
                <Route path="/services/:serviceId" element={<SingleService/>}/>
                <Route path="/services/:serviceId/edit" element={<EditService/>}/>
                <Route path="/request" element={<RequestAsker/>}/>
                <Route path="/request/add-request" element={<AddRequest/>}/>
                <Route path="/requests/:requestId" element={<SingleRequest/>}/>
                <Route path="/requests/:requestId/edit" element={<EditRequest/>}/>
            </Routes>
        </div>
        <Footer />
    </div>
);
