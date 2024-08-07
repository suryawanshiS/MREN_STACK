import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {
    const isAuthenticated = false; // Change this to your authentication logic

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default RouteGuard;
