import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { timedAlert } from "./alertSlice";

interface loginAttributes {
  email: string;
  password: string;
}

interface registerAttributes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface updateAttributes {
  firstName: string;
  lastName: string;
  email: string;
}

interface User {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  date: string;
  __v: number;
}

interface UserState {
  token: string | null;
  user: {
    _id: string;
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
    date: string;
    __v: number;
  } | null;
  isAuthenticated: Boolean;
}

// USER THUNKS
export const registerUser = createAsyncThunk<string, registerAttributes>(
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
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk<string, loginAttributes>(
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

export const loadUser = createAsyncThunk<User>(
  "user/load",
  async (_, { dispatch, rejectWithValue }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/user/detail");

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

export const updateUser = createAsyncThunk<User, updateAttributes>(
  "user/update",
  async (user, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(user);

    try {
      const res = await axios.put("/user/update", body, config);

      return res.data;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      rejectWithValue(err.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk<string, string>(
  "user/delete",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.delete(`/user/${id}`);

      return res.data;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      rejectWithValue(err.response.data);
    }
  }
);

// USER SLICE
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
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
