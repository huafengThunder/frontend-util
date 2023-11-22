import React from "react"
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from '../../../components/ErrorPage.jsx'
import Layout from '../layout'
import FrontendNav from '../views/frontend-nav'
import Blog from '../views/blog'
import Memorandum from '../views/memorandum'
import Ebook from '../views/ebook'

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        cname: '前端导航',
        element: <FrontendNav />,
      },
      {
        path: "blog",
        cname: '博客',
        element: <Blog />
      },
      {
        path: "memorandum",
        cname: '备忘录',
        element: <Memorandum />
      },
      {
        path: "ebook",
        cname: '电子书',
        element: <Ebook />
      },
    ],
  }
])
