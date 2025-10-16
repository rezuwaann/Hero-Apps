import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Navbar from '../Pages/Header/Navbar'
import { Children, lazy, Suspense } from "react";
import Banner from "../Pages/Banner/Banner";

// import AllApps from "../components/AllApps/AllApps";
import AppDetails from "../components/AppDetails/AppDetails";
import Error from "../Pages/Error/Error";
import AppNotFound from "../components/AppNotFound/AppNotFound";
import Installed from "../Pages/Installed/Installed";

const AllApps = lazy(() => import("../components/AllApps/AllApps"));
const Home = lazy(() => import("../Pages/Home/Home"));

export const router = createBrowserRouter([
    {

        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<div className="flex justify-center items-center h-screen">
                    <span className="block loading loading-dots loading-xl"></span>
                    </div>}>
                    <Home></Home>
                </Suspense>
            },
            {
                path: '/apps',
                element: <Suspense fallback={<div className="flex justify-center items-center"><span className="block loading loading-dots loading-xl h-screen"></span></div>}>
                    <AllApps></AllApps>
                </Suspense>,
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