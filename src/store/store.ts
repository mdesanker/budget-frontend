import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    alerts: alertReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
