import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import AllClasses from "../Pages/AllClasses";
import AddClass from "../Pages/Dashboard/AddClass";
import ErrorPage404 from "../Pages/ErrorPage404";
import InstructorsClasses from "../Pages/Dashboard/InstructorsClasses";
import BookedClass from "../Pages/Dashboard/BookedClass";
import AllInstructors from "../Pages/AllInstructors";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage404></ErrorPage404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'allinstructors',
                element: <AllInstructors></AllInstructors>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage404></ErrorPage404>,
        children: [
            {
                path: '/dashboard',
                element: <UserHome></UserHome>
            },
            {
                path: 'bookedclass',
                element: <BookedClass></BookedClass>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'instructorsclasses',
                element: <InstructorsClasses></InstructorsClasses>
            },
            {
                path: 'instructorshome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'admin',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'manageclasses',
                element:<ManageClasses></ManageClasses>
            },
            
        ]
    }
]);