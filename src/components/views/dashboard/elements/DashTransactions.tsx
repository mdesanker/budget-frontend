import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import TransactionCard from "./TransactionCard";
import { ITransactionDB } from "../../../../store/slices/transactionSlice";

interface Props {
  timespan: number;
}

const DashTransactions = ({ timespan }: Props) => {
  const { monthTransactions, weekTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  let selected: ITransactionDB[] = [];

  if (timespan === 30) {
    selected = monthTransactions;
  } else {
    selected = weekTransactions;
  }

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center text-lg font-semibold mb-2">
        <h2>Recent Transactions</h2>
        <Link
          to="/transaction"
          className="text-blue-700 uppercase border-2  duration-200 border-blue-700 px-4 rounded hover:bg-blue-700 hover:text-white"
        >
          Add
        </Link>
      </div>
      <div className="flex flex-col">
        {selected.length === 0 && (
          <p className="py-2 text-center text-gray-500">
            No recent transactions
          </p>
        )}
        {selected &&
          selected.map((transaction) => {
            return (
              <TransactionCard
                key={transaction._id}
                transaction={transaction}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashTransactions;
