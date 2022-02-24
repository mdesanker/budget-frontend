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
      <div className="flex flex-col justify-center p-6 items-center w-full bg-gray-200">
        <RiExchangeDollarLine className="h-28 w-28 bg-sky-400 text-white border-6 border-white rounded-full p-4" />
        <h1 className="text-xl font-semibold pt-4">Add Transaction</h1>
      </div>

      <form className="flex flex-col w-full p-4">
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
        <div className="flex flex-col items-center">
          <label htmlFor="amount" className="text-xl font-medium">
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
        <div className="flex flex-col w-4/5">
          <label htmlFor="merchant" className="text-lg font-medium">
            {type === "expense" ? "To" : "From"}
          </label>
          <input
            type="text"
            name="merchant"
            id="merchant"
            className="outline-none text-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="border-b outline-none"
          />
        </div>

        <select name="category" id="category">
          <option value="personal">Personal</option>
          <option value="billsutilities">Bills & Utilities</option>
          <option value="professionalService">Professional Service</option>
        </select>
        <button>Add transaction</button>
      </form>
    </main>
  );
};

export default Transaction;
