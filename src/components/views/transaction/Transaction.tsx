import React, { useState } from "react";

const Transaction = () => {
  const [type, setType] = useState("expense");

  const typeHandler = (e: React.ChangeEvent<any>) => {
    setType(e.target.value);
  };

  return (
    <main className="main gap-2">
      <h1>Add Transaction</h1>
      <div className="flex w-full px-4">
        <button
          className={`bg-gray-200 grow font-medium py-2 duration-200 ${
            type === "expense" ? "bg-sky-700 text-white" : ""
          }`}
          onClick={typeHandler}
          value="expense"
        >
          Expense
        </button>
        <button
          className={`bg-gray-200 grow font-medium py-2 duration-200 ${
            type === "earning" ? "bg-sky-700 text-white" : ""
          }`}
          onClick={typeHandler}
          value="earning"
        >
          Earning
        </button>
      </div>
    </main>
  );
};

export default Transaction;
