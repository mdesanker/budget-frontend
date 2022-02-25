import React from "react";
import AddTransactionForm from "./elements/AddTransactionForm";
import TransactionFormHeader from "./elements/TransactionFormHeader";
import "./TransactionForm.css";

const AddTransaction = () => {
  return (
    <main className="transaction-wrapper bg-stripe">
      <div className="transaction-card">
        <TransactionFormHeader title="New Transaction" />
        <AddTransactionForm />
      </div>
    </main>
  );
};

export default AddTransaction;
