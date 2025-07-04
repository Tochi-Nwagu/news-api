//import React from 'react';
import MainLayout from '../src/pages/Layout/MainLayout';
import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';
import AuthLayout from '../src/pages/Layout/AuthLayout';
import Home from '../src/pages/Home/Home';
import BusinessNews from '../src/components/News/BusinessNews';
import EntertainmentNews from '../src/components/News/EntertainmentNews';
import TechnologyNews from '../src/components/News/TechnologyNews';
import SportNews from '../src/components/News/SportNews';
import HealthNews from '../src/components/News/HealthNews';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import NewsPage from '../src/components/News/NewsPage';
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
        path: 'health',
        element: <HealthNews />,
      },
      {
        path: 'business',
        element: <BusinessNews />,
      },
      {
        path: 'entertainment',
        element: <EntertainmentNews />,
      },
      {
        path: 'technology',
        element: <TechnologyNews />,
      },
      {
        path: 'sport',
        element: <SportNews />,
      },
      {
        path: '/news/:id',
        element: <NewsPage />,
      },
    ],
  },
  //Auth
  {
    path: 'login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: 'register',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  //DashBoard
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        Element: <Dashboard />,
      },
    ],
  },
];

export default routes;
