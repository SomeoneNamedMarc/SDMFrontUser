import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import { protectedRoutes, publicRoutes } from "./components/Routes";
import { AuthProvider } from "./components/AuthContext.tsx";
import AuthCheck from "./components/AuthCheck.tsx";
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
    children: [
      ...publicRoutes.map(route => ({
      path: route.path,
      element: route.component,
    })),
    ...protectedRoutes.map(route => ({
      path: route.path,
      element: <AuthCheck>{route.component}</AuthCheck>,
    })),
  ]
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);