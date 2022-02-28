import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { timespanTransactionFilter } from "../../utils/utilFunctions";
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

export const getTransaction = createAsyncThunk<any, string>(
  "transaction/get",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(`/transaction/${id}`);

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

export const editTransaction = createAsyncThunk<
  any,
  { id: string; transaction: any }
>(
  "transaction/edit",
  async ({ id, transaction }, { dispatch, rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(transaction);

    try {
      const res = await axios.put(`/transaction/edit/${id}`, body, config);

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
  amount: string;
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
  yearTransactions: ITransactionDB[];
  monthTransactions: ITransactionDB[];
  weekTransactions: ITransactionDB[];
  currentTransaction: ITransactionDB | null;
}

const initialState: TransactionState = {
  transactions: [],
  yearTransactions: [],
  monthTransactions: [],
  weekTransactions: [],
  currentTransaction: null,
};

const transactionSlice = createSlice({
  name: "transacitons",
  initialState,
  reducers: {
    clearAllTransactions: (state) => {
      state.transactions = [];
      state.yearTransactions = [];
      state.monthTransactions = [];
      state.weekTransactions = [];
      state.currentTransaction = null;
    },
    clearTransaction: (state) => {
      state.currentTransaction = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserTransactions.fulfilled, (state, { payload }) => {
      state.transactions = payload;
      state.yearTransactions = timespanTransactionFilter(365, payload);
      state.monthTransactions = timespanTransactionFilter(30, payload);
      state.weekTransactions = timespanTransactionFilter(7, payload);
    });
    builder.addCase(getUserTransactions.rejected, (state) => {
      state.transactions = [];
      state.yearTransactions = [];
      state.monthTransactions = [];
      state.weekTransactions = [];
    });
    builder.addCase(getTransaction.fulfilled, (state, { payload }) => {
      state.currentTransaction = payload;
    });
    builder.addCase(getTransaction.rejected, (state) => {
      state.currentTransaction = null;
    });
    builder.addCase(addTransaction.fulfilled, (state, { payload }) => {
      state.transactions.push(payload);
    });
    builder.addCase(editTransaction.fulfilled, (state, { payload }) => {
      // Get index of editted transaction
      const index = state.transactions.findIndex(
        (transaction) => transaction._id === payload._id
      );
      // Edit transaction in state
      state.transactions[index] = payload;
    });
    builder.addCase(deleteTransaction.fulfilled, (state, { payload }) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction._id !== payload
      );
      state.yearTransactions = state.yearTransactions.filter(
        (transaction) => transaction._id !== payload
      );
      state.monthTransactions = state.monthTransactions.filter(
        (transaction) => transaction._id !== payload
      );
      state.weekTransactions = state.weekTransactions.filter(
        (transaction) => transaction._id !== payload
      );
    });
  },
});

export const { clearAllTransactions, clearTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
