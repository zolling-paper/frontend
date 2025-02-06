import ROUTE from '@constants/route';
import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';

import App from './App';
import CreatePaperPage from './pages/[boardId]/create-paper/page';
import BoardPage from './pages/[boardId]/page';
import PapersPage from './pages/[boardId]/papers/page';
import CreateBoardPage from './pages/create-board/page';
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
        path: ROUTE.createBoard,
        element: <CreateBoardPage />,
      },
      {
        path: ROUTE.board,
        element: <BoardPage />,
      },
      {
        path: ROUTE.createPaper,
        element: <CreatePaperPage />,
      },
      {
        path: ROUTE.papers,
        element: <PapersPage />,
      },
    ],
  },
]);

export default router;
