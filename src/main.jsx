import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import MainRoot from './MainRoot/MainRoot';
import Home from './Home/Home';
import ErrorPage from './Navbar/ErrorPage';
import JobDetails from './JobDetails/JobDetails';
import AppliedJobs from './Home/AppliedJobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path: "/job/:id",
        loader :()=> fetch('./jobs.json'),
        element : <JobDetails></JobDetails>
      },
      {
        path: "/applied",
        loader: () => fetch('jobs.json'),
        element:<AppliedJobs></AppliedJobs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
