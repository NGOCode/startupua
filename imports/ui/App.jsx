import React from 'react';
import cn from 'classnames';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Header, Footer } from './components';
import {
    Home,
    ServiceProvider,
    AddService,
    Requester,
    AddRequest,
    AllServices,
    AllRequests,
    SingleService,
    SingleRequest,
    EditRequest,
    EditService
} from './pages';

import {
    MyServicesList,
    MyRequestsList
} from './components';

export const App = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    
    return (
        <div className={cn({ 'front-page': isHome })}>
            <Header/>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/services" element={<ServiceProvider/>}>
                        <Route index element={<Navigate to="/services/all-requests" replace />} />
                        <Route path="/services/all-requests" element={<AllRequests/>}/>
                        <Route path="/services/:serviceId" element={<SingleService/>}/>
                        <Route path="/services/my-offers" element={<MyServicesList/>}/>
                        <Route path="/services/my-offers/:serviceId/edit" element={<EditService/>}/>
                        <Route path="/services/my-offers/add" element={<AddService/>}/>
                    </Route>
                    
                    <Route path="/requests" element={<Requester/>}>
                        <Route index element={<Navigate to="/requests/all-offers" replace />} />
                        <Route path="/requests/all-offers" element={<AllServices/>}/>
                        <Route path="/requests/my-requests" element={<MyRequestsList />}/>
                        <Route path="/requests/my-requests/add" element={<AddRequest/>}/>
                        <Route path="/requests/my-requests/:requestId/edit" element={<EditRequest/>}/>
                        <Route path="/requests/:requestId" element={<SingleRequest/>}/>
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};
