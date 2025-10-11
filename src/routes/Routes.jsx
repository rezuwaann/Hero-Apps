import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Navbar from '../Pages/Header/Navbar'
import { Children } from "react";
import Banner from "../Pages/Banner/Banner";
import Home from "../Pages/Home/Home";
import AllApps from "../components/AllApps/AllApps";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        
        children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/apps',
            Component:AllApps,
            loader:()=>fetch('/appsData.json')

        }
    ]
    },
    
]);