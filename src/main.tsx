import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import About from './pages/About.tsx';
import Colwdvatn from './pages/Colwdvatn.tsx';
import Ipsumvatn from './pages/Ipsumvatn.tsx';
import Loremvik from './pages/Loremvik.tsx';
import WhaleWatching from './pages/WhaleWatching.tsx';
import Travel from './pages/Travel.tsx';
import Hotels from './pages/Hotels.tsx';

// define a router with a basename "/sydfjords-react" (or whatever's defined in the vite.config.js file)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/colwdvatn",
    element: <Colwdvatn/>
  },
  {
    path: "/ipsumvatn",
    element: <Ipsumvatn/>
  },
  {
    path: "/loremvik",
    element: <Loremvik/>
  },
  {
    path: "/whales",
    element: <WhaleWatching/>
  },
  {
    path: "/travel",
    element: <Travel/>
  },
  {
    path: "/hotels",
    element: <Hotels/>
  }
], {
  basename: "/sydfjords-react"
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
