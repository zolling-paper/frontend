import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import { DesignProvider } from './theme/DesignProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DesignProvider>
  </StrictMode>,
)
