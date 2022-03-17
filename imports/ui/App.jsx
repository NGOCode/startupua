import React from 'react';
import cn from 'classnames';
import { Routes, Route, useLocation } from "react-router-dom";

import { Header, Footer } from './components';
import {
    Home,
    ServiceProvider,
    AddService,
    RequestAsker,
    AddRequest,
    AllServices,
    AllRequests,
    SingleService,
    SingleRequest,
    EditRequest,
    EditService
} from './pages';

export const App = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    
    return (
        <div className={cn({ 'front-page': isHome })}>
            <Header/>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/service" element={<ServiceProvider/>}/>
                    <Route path="/service/all-needs" element={<AllRequests/>}/>
                    <Route path="/service/add-service" element={<AddService/>}/>
                    <Route path="/services/:serviceId" element={<SingleService/>}/>
                    <Route path="/services/:serviceId/edit" element={<EditService/>}/>
                    <Route path="/request" element={<RequestAsker/>}/>
                    <Route path="/request/all-offers" element={<AllServices/>}/>
                    <Route path="/request/add-request" element={<AddRequest/>}/>
                    <Route path="/requests/:requestId" element={<SingleRequest/>}/>
                    <Route path="/requests/:requestId/edit" element={<EditRequest/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};
