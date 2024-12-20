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
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

const AuthContext = createContext({
    ...initialState,
    login: () => {},
    logout: () => {},
    setUser: () => {},
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (user, token) => {
        dispatch({ type: "LOGIN", payload: { user, token } });
        localStorage.setItem("token", token);
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("token");
    };

    const setUser = (user) => {
        dispatch({ type: "SET_USER", payload: { user } });
    };

    
    return (
        <AuthContext.Provider value={{ ...state, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);