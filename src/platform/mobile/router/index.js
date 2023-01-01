import React from "react"
import { createBrowserRouter, redirect } from "react-router-dom"
import ErrorPage from '../../../components/ErrorPage'
import Layout from '../layout'
import FrontendNav from '../views/frontend-nav'
import Blog from '../views/blog'
import ChatGPT from '../views/chat-gpt'

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "frontend-nav",
        element: <FrontendNav />,
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "/",
        element: <ChatGPT />
      },
    ],
  }
])
