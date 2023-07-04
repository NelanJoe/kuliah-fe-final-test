import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/provinces";

export const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    value: data.provinces,
  },
  reducers: {
    addDataCovid: (state, action) => {
      const findIndex = state.value(
        (prov) => prov.kota === action.payload.kota
      );

      state.value[findIndex] = {
        ...state.value[findIndex],
        [action.payload.case]: jumlah,
      };

      return {
        ...state.value,
      };
    },
  },
});

export const { addDataCovid } = provincesSlice.actions;
export default provincesSlice.reducer;
