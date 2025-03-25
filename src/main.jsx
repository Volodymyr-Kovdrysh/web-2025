
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import './app.css'
import App from './App.jsx'
import ErrorPage from "./pages/error-page.jsx";
import RootPage from "./pages/root-page.jsx";
import ParamsDemoPage from "./pages/params-demo-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import {FeedbackProvider} from "./context/FeedbackContext.jsx";
import Login from "./components/Login.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

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
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <RegisterForm />,
        errorElement: <ErrorPage />,
    }

])

createRoot(document.getElementById('root')).render(
  <FeedbackProvider>
      <RouterProvider router={router} />
  </FeedbackProvider>
)
