import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/home')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/services',
                element: <Services></Services>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])