import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

// TRANSACTION THUNKS
export const getUserTransactions = createAsyncThunk(
  "transactions/getAllUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get("/transaction/user");

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

export const addTransaction = createAsyncThunk<any, any>(
  "transaction/add",
  async (transaction, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(transaction);

    try {
      const res = await axios.post("/transaction/add", body, config);

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

// TRANSACTION SLICE
interface Transaction {
  _id?: string;
  user?: string;
  description: string;
  merchant: string;
  amount: number | string;
  type: string;
  category: string;
  date: string;
  __v0?: number;
}

interface TransactionState {
  transactions: Transaction[];
  currentTransaction: Transaction | null;
}

const initialState: TransactionState = {
  transactions: [],
  currentTransaction: null,
};

const transactionSlice = createSlice({
  name: "transacitons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserTransactions.fulfilled, (state, { payload }) => {
      state.transactions = payload;
    });
    builder.addCase(getUserTransactions.rejected, (state) => {
      state.transactions = [];
    });
    builder.addCase(addTransaction.fulfilled, (state, { payload }) => {
      state.transactions.push(payload);
    });
  },
});

// export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
