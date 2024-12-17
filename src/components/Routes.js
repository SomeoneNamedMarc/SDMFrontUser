import React from 'react'
import * as AiIcons from "react-icons/ai";
import Evaluation from "../pages/Evaluation";
import Todo from "../pages/Todo";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login"
import Home from "../pages/Home"

export const publicRoutes = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        component:  <Home />,
    },
    {
        title: "About us",
        path: "/about",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <About />,
    },
    {
        title: "Register",
        path: "/register",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <Register />,
    },
    {
        title: "Login",
        path: "/login",
        icons: <AiIcons.AiOutlineInfoCircle  />,
        cName: "nav-text",
        component:  <Login />,
    }
];


export const protectedRoutes = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        component:  <Home />,
    },
    {
        title: "Evaluation",
        path: "/evaluation",
        icons: <AiIcons.AiOutlineCheckSquare  />,
        cName: "nav-text",
        component:  <Evaluation />,
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
];