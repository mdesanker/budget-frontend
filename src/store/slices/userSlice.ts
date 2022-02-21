import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// USER THUNKS
interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const registerUser = createAsyncThunk<string, User>(
  "/user/register",
  async (registration, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(registration);

    try {
      const res = await axios.post(`/auth/register`, body, config);

      return res.data.token;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        console.log(error);
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// USER SLICE
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
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.token = payload;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
