import { DateTime } from "luxon";
import { ITransactionDB } from "../../../../store/slices/transactionSlice";

interface TransactionProps {
  transaction: ITransactionDB;
}

const TransactionCard = ({ transaction }: TransactionProps) => {
  const { description, merchant, amount, type, date, category } = transaction;

  const formattedDate = DateTime.fromISO(date).toLocaleString(
    DateTime.DATE_MED
  );

  return (
    <button className="flex justify-between py-2 border-b border-slate-200 mb-2 hover:bg-slate-50">
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
    </button>
  );
};

export default TransactionCard;
