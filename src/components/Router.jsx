import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
