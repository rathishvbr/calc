import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import ErrorPage from './routes/error/error-page.tsx'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { createRoot } from 'react-dom/client'
import { store } from './DAL/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
