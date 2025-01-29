import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./home/Home";
import LogInPage from "./Athentication/LogInPage";
import RegisterPage from "./Athentication/RegisterPage";

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
    ],
  },
]);

export default router;
