import { BiMenuAltLeft } from "react-icons/bi";

const DashTransactions = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center text-lg font-semibold">
        <h2>Recent Transactions</h2>
        <BiMenuAltLeft className="h-8 w-8 text-blue-500" />
      </div>
    </div>
  );
};

export default DashTransactions;
