import { createSlice } from "@reduxjs/toolkit";

// Define type for user state
interface UserState {
  token: string | null;
  user: {} | null;
  isAuthenticated: Boolean;
}

const initialState: UserState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
