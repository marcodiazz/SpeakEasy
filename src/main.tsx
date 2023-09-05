import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Vocabulary } from './pages/Vocabulary.tsx'
import { Index } from './pages/Index.tsx'
import { Prizes } from './pages/Prizes.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "vocabulary",
        element: <Vocabulary />,
      },
      {
        path: "prizes",
        element: <Prizes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
