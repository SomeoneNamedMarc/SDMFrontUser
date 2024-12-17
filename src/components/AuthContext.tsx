import React, { createContext, useReducer, useContext } from "react";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

const AuthContext = createContext({
    ...initialState,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user, token) => {
        dispatch({ type: "LOGIN", payload: { user, token } });
        localStorage.setItem("token", token); // Save token for persistence
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("token"); // Clear token from localStorage
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);