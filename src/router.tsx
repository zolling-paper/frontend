import ROUTE from '@constants/route';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import MainPage from './pages/MainPage/MainPage';

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
