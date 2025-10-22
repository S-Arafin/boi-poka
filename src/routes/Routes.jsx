import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import root from '../pages/root/root';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/Home/Home';
import about from '../pages/about/about';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch("/booksData.json"),
            path:'/',
            Component:Home,
        },
        {
            path:"/about",
            Component:about,

        },
        {
            path:"readList",
            loader:()=>fetch("/booksData.json"),
            Component:ReadList
        },
        {
            path:"/bookDetails/:id",
            loader:()=>fetch("/booksData.json"),
            Component:BookDetails
        }
    ]
  },
]);