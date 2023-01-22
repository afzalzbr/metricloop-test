import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import BoardCanvas from './pages/BoardCanvas';
//
import DashboardAppPage from './pages/DashboardAppPage';
import Page404 from './pages/Page404';
import GoogleAuthPage from './sections/@dashboard/googleAuth';
import AcceptAuthCode from './sections/@dashboard/googleAuth/AcceptAuthCode';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        {
          path: 'app',
          children: [
            { path: '', element: <DashboardAppPage /> },
            { path: 'board', element: <BoardCanvas /> }
          ]
        },
        { path: 'links', element: <DashboardAppPage /> },
        { path: 'graphs', element: <DashboardAppPage /> },
        { path: 'google', element: <GoogleAuthPage /> },
      ],
    },
    {
      path: '/google-auth',
      element: <AcceptAuthCode />,
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
