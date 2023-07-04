import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constant/provinces";

export const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    value: data.provinces,
  },
  reducers: {
    updateDataCovid: (state, action) => {
      const { kasus: covidCase, province, jumlah } = action.payload;

      const findIndex = state.value.findIndex((prov) => prov.kota === province);

      state.value[findIndex].kasus += parseInt(jumlah);
      state.value[findIndex][covidCase] += parseInt(jumlah);
    },
  },
});

export const { updateDataCovid } = provincesSlice.actions;
export default provincesSlice.reducer;
