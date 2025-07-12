import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

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

const ifLogin = true;

const ProtectedR = ({ children }: { children: ReactNode }) => {
  return ifLogin ? children : <Navigate to="/login" />;
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
        path: 'business',
        element: <BusinessNews />,
      },
      {
        path: 'entertainment',
        element: <EntertainmentNews />,
      },
      {
        path: 'health',
        element: <HealthNews />,
      },
      {
        path: 'news/:id',
        element: <NewsPage />,
      },
      {
        path: 'sport',
        element: <SportNews />,
      },
      {
        path: 'technology',
        element: <TechnologyNews />,
      },
    ],
  },
];

export default routes;
