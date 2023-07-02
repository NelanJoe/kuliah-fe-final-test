import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Theme from "./components/ui/Theme";
import GlobalStyled from "./GlobalStyled";

import { SWRConfig } from "swr";
import axios from "axios";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Configuration fetcher for used global config
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async (url) => await axios.get(url).then((res) => res.data);

root.render(
  <Theme>
    <GlobalStyled />
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </Theme>
);
