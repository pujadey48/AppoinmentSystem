import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import DashboardLayout from "../../Layout/DashboardLayout";
import Error404Page from "../../Pages/Error/Error404Page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
              path: "*",
              element: <Error404Page></Error404Page>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
              path: "/dashboard/*",
              element: <Error404Page></Error404Page>,
            },
        ]
    }
])

export default router;