import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router'
import { DesignProvider } from './theme/DesignProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignProvider>
      <RouterProvider router={router} />
    </DesignProvider>
  </StrictMode>,
)
