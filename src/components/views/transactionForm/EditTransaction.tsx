import React from "react";
import { useParams } from "react-router-dom";
import EditTransactionForm from "./elements/EditTransactionForm";
import TransactionFormHeader from "./elements/TransactionFormHeader";
import "./TransactionForm.css";

const EditTransaction = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <main className="transaction-wrapper bg-stripe">
      <div className="transaction-card">
        <TransactionFormHeader title="Edit Transaction" />
        {id && <EditTransactionForm id={id} />}
      </div>
    </main>
  );
};

export default EditTransaction;
