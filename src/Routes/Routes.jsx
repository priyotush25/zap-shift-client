import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Coverage from "../Pages/coverage/Coverage";
import Home from "../Pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,

        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
]);
