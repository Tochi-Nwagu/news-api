//import React from 'react';
import MainLayout from '../src/pages/Layout/MainLayout';

import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';
import AuthLayout from '../src/pages/Layout/AuthLayout';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import Home from '../src/pages/Home/Home';

let ifLogin= true

const ProtectedR =({children})=>{
  return ifLogin?children : <Navigate to='login'/>
}

const routes = [

  {
    path: '/login',
    element: <Login/>
  },
      {
        path: '/register',
        element: <Register/>

      },

{path: '/',
    element: <AuthLayout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
    {
      path: 'dashboard',
        element: <Dashboard/>,
    }
    ]
  }

]

export default routes;
