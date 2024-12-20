import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext.tsx";

function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    logout();
    navigate("/login");
}

export default Logout;