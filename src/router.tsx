import { createBrowserRouter } from 'react-router-dom';
import ROUTE from '@constants/route';
import App from './App';
import MainPage from './pages/MainPage/MainPage';
import { Suspense } from 'react';
const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        path: ROUTE.main,
        element: <MainPage />,
      },
      // {
      //   path: '*',
      //   element: <ErrorPage />,
      // },
    ],
  },
]);

export default router;
