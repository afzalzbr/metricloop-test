import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import DashboardAppPage from './pages/DashboardAppPage';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'links', element: <DashboardAppPage /> },
        { path: 'graphs', element: <DashboardAppPage /> }
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: '404', element: <Page404 />,
    }
  ]);

  return routes;
}
