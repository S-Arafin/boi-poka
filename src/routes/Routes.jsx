import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from '../pages/root/root';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
        }
    ]
  },
]);