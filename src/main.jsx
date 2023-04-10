import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Jobs from "./components/Jobs";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/statistics',
            element: <Statistics />,
        },
        {
            path: '/jobs',
            element: <Jobs />,
        },
        {
            path: '/blog',
            element: <Blog />,
        },
    ],
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);