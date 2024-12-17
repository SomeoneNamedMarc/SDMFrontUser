import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from "react-icons";
import { publicRoutes, protectedRoutes } from "./Routes.js";
import { useAuth } from "../components/AuthContext.tsx";
import "../styles/Navbar.css";
import "../styles/index.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const routesToDisplay = isAuthenticated ? protectedRoutes : publicRoutes;

    const showSidebar = () => { 
        setSidebar((prevSidebar) => !prevSidebar);

        const content = document.querySelector('.page-content');

        sidebar ? 
        content.classList.remove('page-content-extended') :
        content.classList.add('page-content-extended');
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff"}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars color='White' fontSize='24px' onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu nav-menu-active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    
                    <li className="navbar-toggle">
                        {/*
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>*/}  
                    </li>

                    {routesToDisplay.map((item, index) => {
                        
                        const activeClass = location.pathname === item.path ? "active" : "";

                        return (
                            <li key={index} className={`nav-text ${activeClass}`}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                    })}
                </ul>
                </nav>

            </IconContext.Provider>
        </>
    )
}

export default Navbar;