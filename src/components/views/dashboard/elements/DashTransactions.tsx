import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";

export interface Transaction {
  user: string;
  description: string;
  merchant: string;
  amount: number;
  type: "expense" | "earning";
  category: string;
  date: string;
  _id: string;
  __v?: number;
}

const DashTransactions = () => {
  const transactions: Transaction[] = [
    {
      user: "620f8197b39ee93778ce738b",
      description: "Friday night dinner",
      merchant: "Kroger",
      amount: 75,
      type: "expense",
      category: "Groceries",
      date: "2022-02-22T14:51:39.962Z",
      _id: "6210cac500a322b6438c589a",
      __v: 0,
    },
    {
      user: "620f8197b39ee93778ce738c",
      description: "Monthly phone bill",
      merchant: "AT&T",
      amount: 45,
      type: "earning",
      category: "Bills & Utilities",
      date: "2022-02-22T14:51:39.962Z",
      _id: "6210cac500a322b6438c589b",
      __v: 0,
    },
    {
      user: "620f8197b39ee93778ce738b",
      description: "Rustic Granite Chair",
      merchant: "Will Inc",
      amount: 959,
      type: "expense",
      category: "Groceries",
      date: "2022-02-17T13:30:00.000Z",
      _id: "6210cac500a322b6438c589c",
      __v: 0,
    },
    {
      user: "620f8197b39ee93778ce738b",
      description: "Small Concrete Fish",
      merchant: "Reynolds - O'Keefe",
      amount: 927,
      type: "earning",
      category: "Groceries",
      date: "2022-02-01T13:30:00.000Z",
      _id: "6210cac500a322b6438c589d",
      __v: 0,
    },
    {
      user: "620f8197b39ee93778ce738b",
      description: "Generic Metal Table",
      merchant: "Berge, Rogahn and Zemlak",
      amount: 207,
      type: "expense",
      category: "Groceries",
      date: "2021-11-12T13:30:00.000Z",
      _id: "6210cac500a322b6438c589e",
      __v: 0,
    },
  ];

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center text-lg font-semibold mb-2">
        <h2>Recent Transactions</h2>
        {/* <BiMenuAltLeft className="h-8 w-8 text-blue-500" /> */}
        <Link
          to="/transaction"
          className="text-blue-700 uppercase border-2  duration-200 border-blue-700 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          Add
        </Link>
      </div>
      <div className="flex flex-col">
        {transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction._id} transaction={transaction} />
          );
        })}
      </div>
    </div>
  );
};

export default DashTransactions;
