import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
)
