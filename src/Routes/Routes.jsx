import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import ErrorPage from "../ErrorPage/ErrorPage";
import FindJob from "../Pages/FindJob/FindJob";
import PostJob from "../Pages/PostJob/PostJob";

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
            element: <PostJob></PostJob>
        },
      ]
    },
  ]);

  export default router;