import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

// TRANSACTION THUNKS
export const getUserTransactions = createAsyncThunk(
  "transactions/getAllUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get("/transaction/user");

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

export const getTransactionsForXDays = createAsyncThunk<any, string>(
  "transactions/getXDays",
  async (days, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(`/transaction/user/${days}`);

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

export const deleteTransaction = createAsyncThunk<string, any>(
  "transaction/delete",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/transaction/${id}`);

      return id;
    } catch (err: any) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        dispatch(timedAlert({ ...error, type: "danger" }));
      }
      rejectWithValue(err.response.data);
    }
  }
);

// TRANSACTION SLICE
interface Transaction {
  description: string;
  merchant: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

export interface ITransactionDB extends Transaction {
  _id: string;
  user: string;
  __v0: number;
}

interface TransactionState {
  transactions: ITransactionDB[];
  currentTransaction: ITransactionDB | null;
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
    builder.addCase(getTransactionsForXDays.fulfilled, (state, { payload }) => {
      state.transactions = payload;
    });
    builder.addCase(getTransactionsForXDays.rejected, (state, { payload }) => {
      state.transactions = [];
    });
    builder.addCase(addTransaction.fulfilled, (state, { payload }) => {
      state.transactions.push(payload);
    });
    builder.addCase(deleteTransaction.fulfilled, (state, { payload }) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction._id !== payload
      );
    });
  },
});

// export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
