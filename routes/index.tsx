//import React from 'react';
import MainLayout from '../src/pages/Layout/MainLayout';

import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';
// import AuthLayout from '../src/pages/Layout/AuthLayout';
import Dashboard from '../src/pages/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About';
import BusinessNews from '../src/pages/Dashboard/BusinessNews';
import DashboardLayout from '../src/pages/Layout/DashboardLayout';
import EntertainmentNews from '../src/pages/Dashboard/EntertainmentNews';
import HealthNews from '../src/pages/Dashboard/HealthNews';
import NewsPage from '../src/pages/Dashboard/NewsPage';
import SportNews from '../src/pages/Dashboard/SportNews';
import TechnologyNews from '../src/pages/Dashboard/TechnologyNews';

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
      {
        path: 'about',
        element: <About />,
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
