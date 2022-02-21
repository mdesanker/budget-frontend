import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// ALERT THUNKS

interface Alert {
  id: string;
  msg: string;
  type: "success" | "caution" | "warning" | "danger";
}

export const timedAlert = (error: Partial<Alert>) => (dispatch: any) => {
  const id = uuidv4();

  dispatch(setAlert({ ...error, id }));

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, 3000);
};

// ALERT SLICE
const initialState: Alert[] = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.push(payload);
    },
    removeAlert: (state, { payload }) => {
      return state.filter((alert) => alert.id !== payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
