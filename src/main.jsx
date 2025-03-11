import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import App from './App.jsx'
import ErrorPage from "./pages/error-page.jsx";
import RootPage from "./pages/root-page.jsx";
import ParamsDemoPage from "./pages/params-demo-page.jsx";
import AboutPage from "./pages/about-page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "app",
                element: <App />,
            },
            {
                path: "about",
                element: <AboutPage/>,
            },
            {
                path: "params/:id/:name",
                element: <ParamsDemoPage/>
            }

        ]

    },

])

createRoot(document.getElementById('root')).render(
  // // <StrictMode>
  //   <App />
      <RouterProvider router={router} />
  //</StrictMode>
)
