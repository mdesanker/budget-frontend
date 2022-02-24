import React, { useState } from "react";
import { RiExchangeDollarLine } from "react-icons/ri";

const Transaction = () => {
  const [type, setType] = useState("expense");

  const typeHandler = (e: React.ChangeEvent<any>) => {
    setType(e.target.value);
  };

  return (
    <main className="w-full h-screen gap-2 flex flex-col items-center">
      <div className="flex flex-col justify-center p-6 items-center w-full bg-gray-200">
        <RiExchangeDollarLine className="h-24 w-24 bg-white shadow-md rounded-full p-2" />
        <h1 className="text-xl font-semibold pt-4">Add Transaction</h1>
      </div>

      <form className="flex flex-col">
        <div className="flex w-full px-4">
          <button
            type="button"
            className={`bg-gray-200 grow font-medium py-2 duration-200 ${
              type === "expense" ? "bg-sky-700 text-white" : ""
            }`}
            onClick={typeHandler}
            value="expense"
          >
            Expense
          </button>
          <button
            type="button"
            className={`bg-gray-200 grow font-medium py-2 duration-200 ${
              type === "earning" ? "bg-sky-700 text-white" : ""
            }`}
            onClick={typeHandler}
            value="earning"
          >
            Earning
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col w-2/3">
            <label htmlFor="merchant">
              {type === "expense" ? "To" : "From"}
            </label>
            <input
              type="text"
              name="merchant"
              id="merchant"
              className="border-b outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="amount">Amount</label>
            <div className="flex">
              <p>$</p>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="00.00"
                className="appearance-none outline-none m-0 border-b"
              />
            </div>
          </div>
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
