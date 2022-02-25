import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";
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

  // Collapse card on outside click
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setTimeout(() => {
            setIsActive(false);
          }, 100);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const cardRef = useRef(null);
  useOutsideAlerter(cardRef);

  return (
    <div
      ref={cardRef}
      className="flex flex-col py-2 border-b border-slate-200 mb-2 hover:bg-slate-50 cursor-pointer"
    >
      <div onClick={clickHandler} className="flex justify-between w-full">
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
          <button className="font-medium text-sky-600 uppercase tracking-widest border-2 border-sky-600 px-4 rounded duration-200 hover:text-sky-800 hover:border-sky-800">
            Edit
          </button>
          <button className="font-medium text-red-600 uppercase tracking-widest border-2 border-red-600 px-4 rounded duration-200 hover:text-red-800 hover:border-red-800">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
