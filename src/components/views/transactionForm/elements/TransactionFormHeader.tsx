import { RiExchangeDollarLine } from "react-icons/ri";

interface Props {
  title: string;
}

const TransactionFormHeader = ({ title }: Props) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full bg-gray-100 rounded-t-md">
      <RiExchangeDollarLine className="absolute h-24 w-24 p-4 bg-white shadow-md rounded-full -top-12 border-4 border-white" />
      <h1 className="text-xl font-semibold p-2 mt-12">{title}</h1>
    </div>
  );
};

export default TransactionFormHeader;
