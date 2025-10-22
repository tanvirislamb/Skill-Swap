import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homepage from "../Pages/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [{
            path: '/',
            Component: Homepage
        }]
    }
])