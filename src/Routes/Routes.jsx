import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Homepage from "../Pages/Homepage";
import { Component } from "react";
import Details from "../Pages/Details";

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
            }
        ]
    }
])