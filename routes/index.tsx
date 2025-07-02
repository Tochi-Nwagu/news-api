//import React from 'react';
import MainLayout from '../src/pages/Layout/MainLayout';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
];

export default routes;
