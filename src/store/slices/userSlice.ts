import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";

interface RegistrationDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const registerUser = createAsyncThunk(
  "/user/register",
  async (registrationDetails: RegistrationDetails, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(registrationDetails);

    try {
      const res = await axios.post(`/auth/register`, body, config);

      console.log(res.data);
      return res.data.token;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        console.log(error);
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

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
