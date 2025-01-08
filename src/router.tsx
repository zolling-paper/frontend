import { createBrowserRouter } from 'react-router-dom';
import ROUTE from '@constants/route';
import { Suspense } from 'react';
import App from './App';
const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      // {
      //   index: true,
      //   path: ROUTE.main,
      //   element: <MainPage />,
      // },
      // {
      //   path: '*',
      //   element: <ErrorPage />,
      // },
    ],
  },
]);

export default router;
