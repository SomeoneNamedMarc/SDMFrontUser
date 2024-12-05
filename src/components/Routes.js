import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import About from "../pages/About";

export const Routes = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
        component:  <Home />,
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
    }
];

export default Routes;