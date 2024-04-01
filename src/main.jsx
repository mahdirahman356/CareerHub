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
import { HelmetProvider } from 'react-helmet-async';
import SingUp from './Froms/SingUp';
import Context from './Context/Context';
import SingIn from './Froms/SingIn';
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
        loader :()=> fetch('/jobs.json'),
        element : <JobDetails></JobDetails>
      },
      {
        path: "/applied",
        loader: () => fetch('/jobs.json'),
        element:<AppliedJobs></AppliedJobs>
      }, 
      {
        path: "/singUp",
        element: <SingUp></SingUp>
      },
      {
        path : "/singIn",
        element: <SingIn></SingIn>
      }
      
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </Context>
  </React.StrictMode>,
)
