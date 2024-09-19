import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom"
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ServicesPage from "../pages/Service";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/signup",
                element: <SignUp/>
            },
            {
                path:"/service",
                element: <ServicesPage/>
            }
        ],
    }
])