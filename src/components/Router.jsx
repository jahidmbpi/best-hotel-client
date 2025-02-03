import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./home/Home";
import LogInPage from "./Athentication/LogInPage";
import RegisterPage from "./Athentication/RegisterPage";
import RoomCardDetails from "./room-section/RoomCardDetails";
import BookingPage from "./bookingPage/BookingPage";
import MybookingPage from "./mybookingPage/MybookingPage";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/carddetails/:id",
        element: <RoomCardDetails></RoomCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roomdetails/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: <BookingPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roomdetails/${params.id}`),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MybookingPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
