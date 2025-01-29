import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./components/Router";
import { RouterProvider } from "react-router-dom";
import Provider from "./components/Provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
