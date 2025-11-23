import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/login/Login";
import Register from "../Pages/Auth/resister/Register";
import Rider from "../Pages/Auth/Rider";
import Coverage from "../Pages/coverage/Coverage";
import Home from "../Pages/home/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      }, {
        path: "/rider",
        element: <PrivateRoute>
          <Rider />
        </PrivateRoute>
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);
