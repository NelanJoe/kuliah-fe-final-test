import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import Theme from "./components/ui/Theme";
import GlobalStyled from "./GlobalStyled";

import { store } from "./store/store";
import { Provider } from "react-redux";

import { SWRConfig } from "swr";
import axios from "axios";

import { Toaster } from "react-hot-toast";

// Configuration fetcher for used global config
const fetcher = async (url) => await axios.get(url).then((res) => res.data);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <Theme>
      <GlobalStyled />
      <SWRConfig value={{ fetcher }}>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </SWRConfig>
    </Theme>
  </Provider>
);
