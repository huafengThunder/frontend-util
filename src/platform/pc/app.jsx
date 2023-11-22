import React from 'react'
import router from './router'
import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom'
export default function App() {
  return (
    <React.StrictMode>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </React.StrictMode>
  )
}
