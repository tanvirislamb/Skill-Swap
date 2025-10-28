import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homepage from "../Pages/Homepage";
import Details from "../Pages/Details";
import SignIn from "../Pages/Signin";
import SignUp from "../Pages/Signup";
import Profile from "../Pages/Profile";
import Private from "../Provider/Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                index: true,
                path: '/',
                Component: Homepage
            },
            {
                path: '/details/:id',
                element: <Private>
                    <Details></Details>
                </Private>
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/profile',
                Component: Profile
            }
        ]
    }
])