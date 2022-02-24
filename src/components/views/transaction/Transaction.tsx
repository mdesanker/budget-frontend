import React, { useState } from "react";
import "./Transaction.css";
import { RiExchangeDollarLine } from "react-icons/ri";

const Transaction = () => {
  const [type, setType] = useState("expense");

  const typeHandler = (e: React.ChangeEvent<any>) => {
    setType(e.target.value);
  };

  return (
    <main className="w-full h-screen gap-2 flex flex-col items-center">
      <div className="flex flex-col justify-center p-6 items-center w-full bg-gray-300">
        <RiExchangeDollarLine className="h-28 w-28 bg-sky-700 text-white border-6 border-white rounded-full p-4" />
        <h1 className="text-3xl font-semibold pt-4">Add Transaction</h1>
      </div>
      <form className="flex flex-col w-full p-4 items-center">
        <div className="flex w-full mb-6">
          <button
            type="button"
            className={`bg-gray-100 grow font-medium py-2 duration-200 ${
              type === "expense" ? "bg-sky-700 text-white" : ""
            }`}
            onClick={typeHandler}
            value="expense"
          >
            Expense
          </button>
          <button
            type="button"
            className={`bg-gray-100 grow font-medium py-2 duration-200 ${
              type === "earning" ? "bg-sky-700 text-white" : ""
            }`}
            onClick={typeHandler}
            value="earning"
          >
            Earning
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <div className="flex relative">
            <p className="text-6xl w-[35px] absolute">$</p>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="0.00"
              step={0.01}
              className="appearance-none outline-none m-0 text-6xl text-center border-b w-full"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="merchant" className="label">
            {type === "expense" ? "To" : "From"}
          </label>
          <input
            type="text"
            name="merchant"
            id="merchant"
            className="text-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="label">
            For
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            className="text-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category" className="label">
            Category
          </label>
          <select name="category" id="category">
            <option value="personal">Personal</option>
            <option value="billsutilities">Bills & Utilities</option>
            <option value="professionalService">Professional Service</option>
          </select>
        </div>
        <button>Add transaction</button>
      </form>
    </main>
  );
};

export default Transaction;
