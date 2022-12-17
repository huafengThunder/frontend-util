import React from "react"
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from '../components/ErrorPage'
import Layout from '../platform/pc/layout'
import FrontendNav from '../platform/pc/views/frontend-nav'
import Blog from '../platform/pc/views/blog'
import ChatGPT from '../platform/pc/views/chat-gpt'

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
        path: "chatGPT",
        element: <ChatGPT />
      },
    ],
  }
])
