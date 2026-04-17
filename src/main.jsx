import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Route.jsx'
import FriendProvider from './context/friendProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router}></RouterProvider>

    <ToastContainer />
    </FriendProvider>
  </StrictMode>,
)
