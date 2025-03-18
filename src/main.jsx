import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Portfolio/Portfolio'
import './index.css'

// Define routes properly
const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />, // Load Portfolio component when user visits "/"
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
