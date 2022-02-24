import React from "react";
import { RiExchangeDollarLine } from "react-icons/ri";
import TransactionForm from "./elements/TransactionForm";
import "./Transaction.css";

const Transaction = () => {
  return (
    <main className="w-full h-screen gap-2 flex flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col justify-center items-center bg-white rounded-md shadow-lg">
        <div className="relative flex flex-col justify-center items-center w-full bg-gray-100 rounded-t-md">
          <RiExchangeDollarLine className="absolute h-24 w-24 p-4 bg-white shadow-md rounded-full -top-12 border-4 border-white" />
          <h1 className="text-xl font-semibold p-2 mt-12">Add Transaction</h1>
        </div>
        <TransactionForm />
      </div>
    </main>
  );
};

export default Transaction;
