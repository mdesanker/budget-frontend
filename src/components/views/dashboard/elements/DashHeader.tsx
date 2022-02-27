import { useAppSelector } from "../../../../store/hooks";
import { ITransactionDB } from "../../../../store/slices/transactionSlice";
import { RootState } from "../../../../store/store";
import { totalSpent } from "../../../../utils/utilFunctions";

interface Props {
  timespan: number;
  setTimespan: (value: number) => void;
}

const DashHeader = ({ timespan, setTimespan }: Props) => {
  // Get current user for greeting
  const { user } = useAppSelector((state: RootState) => state.user);

  // Get transactions for calculations
  const { monthTransactions, weekTransactions } = useAppSelector(
    (state: RootState) => state.transactions
  );

  let selected: ITransactionDB[] = [];

  if (timespan === 30) {
    selected = monthTransactions;
  } else {
    selected = weekTransactions;
  }

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimespan(parseInt(e.target.value));
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
            {selected ? totalSpent(selected) : "-"}
          </p>
          <p className="text-gray-500">What you've spent</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center gap-2">
          <select
            name="days"
            id="days"
            className="text-4xl text-blue-600 font-semibold bg-transparent text-center px-2 outline-none"
            // value={selectedOption}
            onChange={selectHandler}
            defaultValue="30"
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
