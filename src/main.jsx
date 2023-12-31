import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='lg:max-w-7xl lg:mx-auto'>
   <React.StrictMode>
   <div><Toaster/></div>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
 </div>
)
