import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.tsx";

const AuthCheck = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default AuthCheck;