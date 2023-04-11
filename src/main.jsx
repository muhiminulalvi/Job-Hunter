import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Jobs from "./components/Jobs";
import Blog from "./components/Blog";
import JobInfo from "./components/JobInfo";
import { jobsAndDetailData } from "./loaders/getjob&detaildata";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
      },
      {
        path: "job/:id",
        element: <JobInfo />,
        loader: ({params}) =>
          fetch(`/jobCollection.json`),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: jobsAndDetailData,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
