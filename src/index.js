import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  //Link,
  //createRoutesFromChildren,
  //createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import "./styles/index.css";

const AppLayout = () => {
  return (
  <>
    <Navbar />
    <div className="page-content page-content-extended">
        <Outlet />
    </div>
  </>
  )
};



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: Routes.map(route => ({
      path: route.path,
      element: route.component,
    })),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);