import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { timedAlert } from "./alertSlice";

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
  async (registration, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(registration);

    try {
      const res = await axios.post(`auth/register`, body, config);

      return res.data.token;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        console.log(error);
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk<string, User>(
  "/user/login",
  async (login, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(login);

    try {
      const res = await axios.post("auth/login", body, config);

      console.log(res.data.token);
      return res.data.token;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/load",
  async (_, { dispatch, rejectWithValue }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/user/detail");

      console.log(res.data);
      return res.data;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        dispatch(timedAlert({ ...error, type: "danger" }));
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
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.token = payload;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    });
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
