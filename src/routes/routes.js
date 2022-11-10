import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import Blogs from "../components/Blogs";
import EditReview from "../components/EditReview";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import MyProfile from "../components/MyProfile";
import MyReviews from "../components/MyReviews";
import ServiceDetails from "../components/ServiceDetails";
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
        loader: () => fetch("https://dentisia-server-side.vercel.app/home"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://dentisia-server-side.vercel.app/services"),
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
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://dentisia-server-side.vercel.app/services/${params.id}`),
      },
      {
        path: '/myreviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/myprofile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: '/editreviews/:id',
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
        loader: ({params})=>fetch(`https://dentisia-server-side.vercel.app/editreview/${params.id}`)
      }
    ],
  },
]);
