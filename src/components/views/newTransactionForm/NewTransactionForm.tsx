import React from "react";
import TransactionForm from "./elements/TransactionForm";
import TransactionFormHeader from "./elements/TransactionFormHeader";
import "./NewTransactionForm.css";

const NewTransactionForm = () => {
  return (
    <main className="transaction-wrapper bg-stripe">
      <div className="transaction-card">
        <TransactionFormHeader title="New Transaction" />
        <TransactionForm />
      </div>
    </main>
  );
};

export default NewTransactionForm;
