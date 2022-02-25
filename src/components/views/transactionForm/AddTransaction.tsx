import React from "react";
import TransactionForm from "./elements/AddTransactionForm";
import TransactionFormHeader from "./elements/TransactionFormHeader";
import "./TransactionForm.css";

const AddTransaction = () => {
  return (
    <main className="transaction-wrapper bg-stripe">
      <div className="transaction-card">
        <TransactionFormHeader title="New Transaction" />
        <TransactionForm />
      </div>
    </main>
  );
};

export default AddTransaction;
