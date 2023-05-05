import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import PrivateRoute from "../page/PrivateRoute";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
