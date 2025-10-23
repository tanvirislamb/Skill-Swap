import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homepage from "../Pages/Homepage";
import { Component } from "react";
import Details from "../Pages/Details";
import SignIn from "../Pages/Signin";
import SignUp from "../Pages/Signup";
import Profile from "../Pages/Profile";

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
                Component: Details
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
                path:'/profile',
                Component:Profile
            }
        ]
    }
])