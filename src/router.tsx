import ROUTE from '@constants/route';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import CreatePage from './pages/create/page';
import MainPage from './pages/page';

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
      {
        path: ROUTE.create,
        element: <CreatePage />,
      },
    ],
  },
]);

export default router;
