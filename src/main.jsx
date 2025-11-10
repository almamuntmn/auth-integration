import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Orders from './components/orders/Orders.jsx';
import PrivetRouts from './components/routs/PrivetRouts.jsx';
import Profile from './components/Profile/Profile.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <PrivetRouts><Home></Home></PrivetRouts>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        element: <PrivetRouts><Orders></Orders></PrivetRouts>
      },
      {
        path: "/profile",
        element: <PrivetRouts><Profile></Profile></PrivetRouts>
      },
      {
        path: "/dashboard",
        element: <PrivetRouts><DashBoard></DashBoard></PrivetRouts>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
