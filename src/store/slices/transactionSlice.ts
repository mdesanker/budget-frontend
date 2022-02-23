import { createSlice } from "@reduxjs/toolkit";

interface TransactionState {
  transactions: {
    _id: string;
    user: string;
    description: string;
    merchant: string;
    amount: number;
    type: string;
    category: string;
    date: string;
    __v0: number;
  }[];
  currentTransaction: {
    _id: string;
    user: string;
    description: string;
    merchant: string;
    amount: number;
    type: string;
    category: string;
    date: string;
    __v0: number;
  } | null;
}

const initialState: TransactionState = {
  transactions: [],
  currentTransaction: null,
};

const transactionSlice = createSlice({
  name: "transacitons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
