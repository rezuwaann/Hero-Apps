import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Navbar from '../Pages/Header/Navbar'
import { Children } from "react";
import Banner from "../Pages/Banner/Banner";
import Home from "../Pages/Home/Home";
import AllApps from "../components/AllApps/AllApps";
import AppDetails from "../components/AppDetails/AppDetails";
import Error from "../Pages/Error/Error";
import AppNotFound from "../components/AppNotFound/AppNotFound";
import Installed from "../Pages/Installed/Installed";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                Component: AllApps,
                loader: () => fetch('/appsData.json')

            },
            {
                path: '/appdetails/:id',
                loader: () => fetch('/appsData.json'),

                errorElement: <AppNotFound></AppNotFound>,
                Component: AppDetails

            },{
                path:'/installed',
                loader: () => fetch('/appsData.json'),
                Component:Installed
            }
        ]
    },

]);