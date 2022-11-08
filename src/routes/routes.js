import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Main from "../layouts/Main";
import PrivateRoute from "../routes/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/home"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
