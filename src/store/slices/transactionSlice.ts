import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DateTime } from "luxon";
import { timespanTransactionFilter } from "../../utils/utilFunctions";

// TRANSACTION THUNKS
export const getUserTransactions = createAsyncThunk<ITransaction[]>(
  "transactions/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/transaction/user");

      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTransaction = createAsyncThunk<ITransaction, string>(
  "transaction/get",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(`/transaction/${id}`);

      return res.data;
    } catch (err: any) {
      rejectWithValue(err.response.data);
    }
  }
);

export const addTransaction = createAsyncThunk<ITransaction, SubTransaction>(
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
      return rejectWithValue(err.response.data);
    }
  }
);

export const editTransaction = createAsyncThunk<
  ITransaction,
  { id: string; transaction: SubTransaction }
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

      dispatch(getUserTransactions());

      return res.data;
    } catch (err: any) {
      rejectWithValue(err.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk<string, any>(
  "transaction/delete",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`/transaction/${id}`);

      dispatch(getUserTransactions());

      return id;
    } catch (err: any) {
      rejectWithValue(err.response.data);
    }
  }
);

// TRANSACTION SLICE
interface SubTransaction {
  description: string;
  merchant: string;
  amount: string;
  type: string;
  category: string;
  date: DateTime;
}

export interface ITransaction extends SubTransaction {
  _id: string;
  user: string;
  __v0: number;
}

interface TransactionState {
  transactions: ITransaction[];
  yearTransactions: ITransaction[];
  monthTransactions: ITransaction[];
  weekTransactions: ITransaction[];
  currentTransaction: ITransaction | null;
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
  },
});

export const { clearAllTransactions, clearTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
