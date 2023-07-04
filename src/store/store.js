import { configureStore } from "@reduxjs/toolkit";

import provincesReducer from "../features/provinces/provincesSlice";

export const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});
