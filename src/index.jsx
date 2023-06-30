import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Theme from "./components/ui/Theme";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Theme>
    <RouterProvider router={router} />
  </Theme>
);
