import React, { useState } from "react";
import "../Transaction.css";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    type: "expense",
  });

  const { type } = formData;

  const typeChangeHandler = (e: React.ChangeEvent<any>) => {
    setFormData((prevState) => {
      return { ...prevState, type: e.target.id };
    });
  };

  return (
    <form className="w-full max-w-5/6 px-6 py-2  flex flex-col items-center">
      <div className="w-full max-w-[360px] pb-4 flex justify-around">
        <button
          type="button"
          id="expense"
          onClick={typeChangeHandler}
          className={`type-btn ${
            type === "expense" ? "bg-sky-700 shadow-lg" : "bg-gray-300"
          }`}
        >
          Spent
        </button>
        <button
          type="button"
          id="earning"
          onClick={typeChangeHandler}
          className={`type-btn ${
            type === "earning" ? "bg-sky-700" : "bg-gray-300"
          }`}
        >
          Earned
        </button>
      </div>
      <div className="form-group group">
        <label
          htmlFor="amount"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          Amount
        </label>
        <div className="flex gap-1 items-center pb-1">
          <p className="text-2xl text-black">$</p>
          <input
            type="number"
            id="amount"
            name="amount"
            step={0.01}
            className="outline-none text-2xl w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
