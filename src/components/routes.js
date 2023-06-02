import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactCreate from './contact-create';
import ContactView from './contact-view';
import ContactUpdate from './contact-update';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<ContactView />} />
            <Route exact path='/contact-create' element={<ContactCreate />} />
            <Route exact path='/contact-update' element={<ContactUpdate />} />
        </Routes>
    );
}

export default MyRoutes;