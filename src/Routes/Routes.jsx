import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Login from "../Pages/Login/Login/Login";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorsClass from "../Pages/Dashboard/InstructorDashboard/InstructorsClass";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../Pages/Dashboard/StudentDashboard/MyClasses";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import StudentRoute from "./StudentRoute";
import MyEnrollClasses from "../Pages/Dashboard/StudentDashboard/MyEnrollClasses";
import FeedBack from "../Pages/FeedBack/FeedBack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <InstructorPage></InstructorPage>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
      // Admin routes
      {
        path: "/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/feedBack/:id",
        element: (
          <AdminRoute>
            <FeedBack></FeedBack>
          </AdminRoute>
        ),
      },
      // Instructor routes
      {
        path: "/addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "/instructorClass",
        element: (
          <InstructorRoute>
            <InstructorsClass></InstructorsClass>
          </InstructorRoute>
        ),
      },
      // Student routes
      {
        path: "/myClass",
        element: (
          <StudentRoute>
            <MyClasses></MyClasses>
          </StudentRoute>
        ),
      },
      {
        path: "/enrollClass",
        element: (
          <StudentRoute>
            <MyEnrollClasses></MyEnrollClasses>,
          </StudentRoute>
        ),
      },
      {
        path: "/paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
