import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ServiceInnerPage from '../pages/ServiceInnerPage';
import AboutInnerPage from '../pages/AboutInnerPage';

const RoutesConfig = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/ourservices" element={<ServiceInnerPage />} />
            <Route path="/aboutus" element={<AboutInnerPage />} />
        </Routes>
    );
};

export default RoutesConfig;
