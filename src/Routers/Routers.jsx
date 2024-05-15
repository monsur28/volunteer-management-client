import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Root from "../Pages/Root/Root";
import NeedVolunteer from "../Pages/NeedVolunteer/NeedVolunteer";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerPost from "../Pages/AddVolunteerPost/AddVolunteerPost";
import VolunteerDetails from "../Layout/NeedVolunteer/VolunteerDetails/VolunteerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/needVolunteer",
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/addVolunteerPost",
        element: (
          <PrivateRoute>
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/needVolunteer/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerPost/${params.id}`),
      },
    ],
  },
]);

export default router;
