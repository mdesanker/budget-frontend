import "./Transaction.css";

const Transaction = () => {
  return (
    <main className="main gap-2">
      <h1>Add Transaction</h1>
      <div className="">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative mb-4"
        >
          <input type="checkbox" id="toggle-example" className="sr-only" />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
          <span className="ml-3 text-gray-900 text-sm font-medium">
            Toggle me
          </span>
        </label>
      </div>
    </main>
  );
};

export default Transaction;
