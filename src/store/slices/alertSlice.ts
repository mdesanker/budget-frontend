import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Alert {
  id: string;
  msg: string;
  type: "success" | "caution" | "warning" | "danger";
}

const initialState: Alert[] = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.push(payload);
    },
    removeAlert: (state, { payload }) => {
      state = state.filter((alert) => alert.id !== payload);
    },
  },
  extraReducers: (builder) => {},
});

// export const {} = alertSlice.actions;

export default alertSlice.reducer;
