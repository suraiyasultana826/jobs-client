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
        }
      ]
    },
  ]);

  export default router;