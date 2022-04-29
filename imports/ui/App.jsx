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
    EditService,
    Fundraising,
    AllDecks,
    SingleDeck
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
                    <Route path="/offer-help" element={<ServiceProvider/>}>
                        <Route index element={<Navigate to="/offer-help/all-requests" replace />} />
                        <Route path="/offer-help/all-requests" element={<AllRequests/>}/>
                        <Route path="/offer-help/my-offers" element={<MyServicesList/>}/>
                        <Route path="/offer-help/my-offers/:serviceId/edit" element={<EditService/>}/>
                        <Route path="/offer-help/my-offers/add" element={<AddService/>}/>
                        <Route path="/offer-help/requests/:requestId" element={<SingleRequest/>}/>
                        <Route path="/offer-help/requests/:requestId" element={<SingleRequest/>}/>
                    </Route>
    
                    <Route path="/fundraising" element={<Fundraising/>}>
                        <Route index element={<Navigate to="/fundraising/all-decks" replace />} />
                        <Route path="/fundraising/all-decks" element={<AllDecks />}/>
                        <Route path="/fundraising/decks/:deckId" element={<SingleDeck />}/>
                    </Route>
                    
                    <Route path="/ask-help" element={<Requester/>}>
                        <Route index element={<Navigate to="/ask-help/all-offers" replace />} />
                        <Route path="/ask-help/all-offers" element={<AllServices/>}/>
                        <Route path="/ask-help/my-requests" element={<MyRequestsList />}/>
                        <Route path="/ask-help/my-requests/add" element={<AddRequest/>}/>
                        <Route path="/ask-help/my-requests/:requestId/edit" element={<EditRequest/>}/>
                        <Route path="/ask-help/offers/:serviceId" element={<SingleService/>}/>
                    </Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};
