import React from 'react'
import * as AiIcons from "react-icons/ai";
import Evaluation from "../pages/Evaluation";
import Todo from "../pages/Todo";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Method from "../pages/Method";
import Logout from "../pages/Logout";

export const publicRoutes = [/*
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        component:  <Home />,
    },*/
    {
        title: "Login",
        path: "/login",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <Login />,
    },
    {
        title: "Register",
        path: "/register",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <Register />,
    },
    {
        title: "About us",
        path: "/about",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <About />,
    },
];


export const protectedRoutes = [/*
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        component:  <Home />,
    },*/
    {
        title: "Evaluation",
        path: "/evaluation",
        icons: <AiIcons.AiOutlineCheckSquare  />,
        cName: "nav-text",
        component:  <Evaluation />,
    },
    {
        title: "Method",
        path: "/method",
        icons: <AiIcons.AiOutlineCheckSquare  />,
        cName: "nav-text",
        component:  <Method />,
    },
    {
        title: "Todo",
        path: "/todo",
        icons: <AiIcons.AiOutlineCheckSquare  />,
        cName: "nav-text",
        component:  <Todo />,
    },
    {
        title: "About us",
        path: "/about",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <About />,
    },
    {
    title: "Logout",
    path: "/logout",
    icons: <AiIcons.AiOutlineInfoCircle  />,
    cName: "nav-text",
    component:  <Logout />,
    },
];