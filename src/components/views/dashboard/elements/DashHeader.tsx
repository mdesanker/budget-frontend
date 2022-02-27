import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getTransactionsForXDays } from "../../../../store/slices/transactionSlice";
import { RootState } from "../../../../store/store";

interface Props {
  setTimespan: (value: number) => void;
}

const DashHeader = ({ setTimespan }: Props) => {
  // Get current user for greeting
  const { user } = useAppSelector((state: RootState) => state.user);

  // Get transactions for calculations
  const { transactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  const spent: any =
    transactions.length > 0 &&
    transactions
      .filter((transaction) => transaction.type === "expense")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + b);

  const earned: any =
    transactions.length > 0 &&
    transactions
      .filter((transaction) => transaction.type === "earning")
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + b);

  const total = spent && earned && spent - earned;

  const [selectedOption, setSelectedOption] = useState("30");

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimespan(parseInt(e.target.value));
    setSelectedOption(e.target.value);
  };

  return (
    <header className="flex flex-col w-full items-center p-8 bg-gray-200">
      <div className="w-full pb-4">
        <h1 className="w-full text-2xl font-semibold">
          Hi {user && user.name.firstName}
        </h1>
        <p className="text-lg text-gray-600">Here's your spending dashboard</p>
      </div>
      <div className="flex w-full bg-white rounded-md shadow-xl px-2 py-6">
        <div className="flex flex-col w-2/3 justify-center items-center gap-2 border-r-2">
          <p className="text-4xl font-semibold">
            ${total ? total.toFixed(2) : " - "}
          </p>
          <p className="text-gray-500">What you've spent</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center gap-2">
          <select
            name="days"
            id="days"
            className="text-4xl text-blue-600 font-semibold bg-transparent text-center px-2 outline-none"
            value={selectedOption}
            onChange={selectHandler}
          >
            <option value="7" className="text-xl text-black">
              7
            </option>
            <option value="30" className="text-xl text-black">
              30
            </option>
          </select>
          <p className="text-gray-500">Days</p>
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
