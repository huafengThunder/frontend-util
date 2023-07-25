import React from "react"
import { createBrowserRouter, redirect } from "react-router-dom"
import ErrorPage from '../../../components/ErrorPage'
import Layout from '../layout'
import FrontendNav from '../views/frontend-nav'
import Blog from '../views/blog'
import Ebook from '../views/ebook'

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FrontendNav />,
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "ebook",
        element: <Ebook />
      },
    ],
  }
])
