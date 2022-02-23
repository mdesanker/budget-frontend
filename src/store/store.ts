import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import userReducer from "./slices/userSlice";
import transactionReducer from "./slices/transactionSlice";

export const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
    transactions: transactionReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
