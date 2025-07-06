//import React from 'react';

// import AuthLayout from '../src/pages/Layout/AuthLayout';

import { Navigate } from 'react-router-dom';

import MainLayout from '../pages/Layout/MainLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home/Home';
import DashboardLayout from '../pages/Layout/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import BusinessNews from '../pages/Dashboard/BusinessNews';
import EntertainmentNews from '../pages/Dashboard/EntertainmentNews';
import HealthNews from '../pages/Dashboard/HealthNews';
import NewsPage from '../pages/Dashboard/NewsPage';
import SportNews from '../pages/Dashboard/SportNews';
import TechnologyNews from '../pages/Dashboard/TechnologyNews';

let ifLogin = true;

const ProtectedR = ({ children }) => {
  return ifLogin ? children : <Navigate to="login" />;
};

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <ProtectedR>
        <DashboardLayout />
      </ProtectedR>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard/business',
        element: <BusinessNews />,
      },
      {
        path: 'dashboard/entertainment',
        element: <EntertainmentNews />,
      },
      {
        path: 'dashboard/health',
        element: <HealthNews />,
      },
      {
        path: 'dashboard/news/:id',
        element: <NewsPage />,
      },
      {
        path: 'dashboard/sport',
        element: <SportNews />,
      },
      {
        path: 'dashboard/technology',
        element: <TechnologyNews />,
      },
    ],
  },
];

export default routes;
