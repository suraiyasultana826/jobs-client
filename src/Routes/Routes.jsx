import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../ErrorPage/ErrorPage";
import FindJob from "../Pages/FindJob/FindJob";
import PostJob from "../Pages/PostJob/PostJob";
import PrivateRoute from "./PrivateRoute";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyBids from "../Pages/MyBids/MyBids";
import MyPostedJob from "../Pages/PostJob/MyPostedJob";
import Update from "../Pages/PostJob/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path: 'signup',
            element: <Signup></Signup>
        },
        {
            path: 'findJob',
            element: <FindJob></FindJob>
        },
        {
            path: 'postJob',
            element: <PrivateRoute><PostJob></PostJob></PrivateRoute>
        },
        {
            path: 'checkout/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5300/webdev/${params.id}`)
        },
        {
            path:'myBids',
            element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
            path:'myPostedJob',
            element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
            loader: () => fetch('http://localhost:5300/postedJob')
        },
        {
            path:'update/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5300/postedJob/${params.id}`)
        }
      ]
    },
  ]);

  export default router;