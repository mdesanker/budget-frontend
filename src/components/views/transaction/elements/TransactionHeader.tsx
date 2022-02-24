import { RiExchangeDollarLine } from "react-icons/ri";

const TransactionHeader = () => {
  return (
    <header className="flex flex-col justify-center p-6 items-center w-full bg-gray-300">
      <RiExchangeDollarLine className="h-28 w-28 bg-sky-700 text-white border-6 border-white rounded-full p-4" />
      <h1 className="text-3xl font-semibold pt-4">Add Transaction</h1>
    </header>
  );
};

export default TransactionHeader;
