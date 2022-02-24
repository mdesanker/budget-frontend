import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Transaction.css";
import { categories } from "../../../../utils/transactionCategories";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    amount: 0,
    merchant: "",
    description: "",
    type: "expense",
    category: "personal",
  });

  const { amount, merchant, description, type, category } = formData;

  const formChangeHandler = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <form className="w-full max-w-5/6 px-6 py-2  flex flex-col items-center">
      <div className="w-full max-w-[360px] pb-4 flex justify-around">
        <button
          type="button"
          name="type"
          value="expense"
          onClick={formChangeHandler}
          className={`type-btn ${
            type === "expense" ? "bg-sky-700 shadow-lg" : "bg-gray-300"
          }`}
        >
          Spent
        </button>
        <button
          type="button"
          name="type"
          value="earning"
          onClick={formChangeHandler}
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
            value={amount}
            onChange={formChangeHandler}
            step={0.01}
            className="outline-none text-2xl w-full"
          />
        </div>
      </div>
      <div className="form-group group">
        <label
          htmlFor="amount"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          {type === "expense" ? "To" : "From"}
        </label>
        <input
          type="text"
          id="merchant"
          name="merchant"
          value={merchant}
          onChange={formChangeHandler}
          className="outline-none text-xl w-full pb-1"
        />
      </div>
      <div className="form-group group">
        <label
          htmlFor="amount"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          For
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={formChangeHandler}
          className="outline-none text-xl w-full pb-1"
        />
      </div>
      <div className="form-group w-full group">
        <label
          htmlFor="category"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          className="outline-none bg-transparent text-xl pb-1"
          value={category}
          onChange={formChangeHandler}
        >
          {categories.map((category) => {
            return (
              <option key={uuidv4()} value={category.value}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default TransactionForm;
