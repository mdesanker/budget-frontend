import { DateTime } from "luxon";
import { useState } from "react";
import { ITransactionDB } from "../../../../store/slices/transactionSlice";

interface TransactionProps {
  transaction: ITransactionDB;
}

const TransactionCard = ({ transaction }: TransactionProps) => {
  const [isActive, setIsActive] = useState(false);

  const { description, merchant, amount, type, date, category } = transaction;

  const formattedDate = DateTime.fromISO(date).toLocaleString(
    DateTime.DATE_MED
  );

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={clickHandler}
      className="flex flex-col py-2 border-b border-slate-200 mb-2 hover:bg-slate-50"
    >
      <div className="flex justify-between w-full">
        <div className="text-left">
          <p>{description}</p>
          <p className="font-semibold">{merchant}</p>
          <div className="flex gap-2 text-slate-400">
            <p className="text-sm">
              {category.toUpperCase()} &middot; {formattedDate}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold text-slate-600">
            {type === "expense" ? "-" : ""} ${amount.toFixed(2)}
          </p>
        </div>
      </div>
      {isActive && (
        <div className="py-2 flex justify-around items-center w-full">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </button>
  );
};

export default TransactionCard;
