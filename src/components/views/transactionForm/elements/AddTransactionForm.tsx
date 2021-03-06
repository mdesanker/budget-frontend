import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../TransactionForm.css";
import { categories } from "../../../../utils/transactionCategories";
import { DateTime } from "luxon";
import { useAppDispatch } from "../../../../store/hooks";
import { addTransaction } from "../../../../store/slices/transactionSlice";

const AddTransactionForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    amount: "",
    merchant: "",
    description: "",
    type: "expense",
    category: "Personal",
    date: DateTime.now(),
  });

  const { amount, merchant, description, type, category, date } = formData;

  const formChangeHandler = (e: React.ChangeEvent<any>): void => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      if (name === "date")
        return { ...prevState, date: DateTime.fromISO(value) };
      else return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTransaction(formData));
    navigate("/dashboard");
  };

  return (
    <form
      className="w-full max-w-5/6 px-4 py-6  flex flex-col items-center"
      onSubmit={formSubmitHandler}
    >
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
            required
            onChange={formChangeHandler}
            step={0.01}
            placeholder="0"
            className="outline-none text-2xl w-full"
          />
        </div>
      </div>
      <div className="form-group group">
        <label
          htmlFor="merchant"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          {type === "expense" ? "To" : "From"}
        </label>
        <input
          type="text"
          id="merchant"
          name="merchant"
          value={merchant}
          required
          onChange={formChangeHandler}
          className="outline-none text-xl w-full pb-1"
        />
      </div>
      <div className="form-group group">
        <label
          htmlFor="description"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          For
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          required
          onChange={formChangeHandler}
          className="outline-none text-xl w-full pb-1"
        />
      </div>
      <div className="form-group group">
        <label
          htmlFor="category"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          className="outline-none bg-white text-xl pb-1"
          value={category}
          required
          onChange={formChangeHandler}
        >
          {categories.map((category) => {
            return (
              <option key={uuidv4()} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group group">
        <label
          htmlFor="date"
          className="w-full font-medium text-gray-400 group-focus-within:text-sky-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date.toISODate()}
          required
          onChange={formChangeHandler}
          className="outline-none text-xl w-full pb-1"
        />
      </div>
      <button className="submit-btn">Add Transaction</button>
      <Link
        to="/dashboard"
        className="text-sky-700 font-medium hover:underline mt-4"
      >
        Cancel
      </Link>
    </form>
  );
};

export default AddTransactionForm;
