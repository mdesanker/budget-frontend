import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = alertSlice.actions;

export default alertSlice.reducer;
