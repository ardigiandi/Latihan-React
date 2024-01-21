import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Product from './pages/product'


const router = createBrowserRouter ([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/product',
    element:<Product/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
